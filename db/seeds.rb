require 'faker'

puts "Clearing existing data..."

Review.destroy_all
Connection.destroy_all
# Photo.destroy_all
Project.destroy_all
Portfolio.destroy_all
DesignerProfileSpecialty.destroy_all
Specialty.destroy_all
DesignerProfile.destroy_all
BusinessProfile.destroy_all
SeekerProfile.destroy_all
Cart.destroy_all

User.destroy_all

puts "Seeding data..."

specialties = [
  "mid century",
  "modern",
  "built in",
  "custom furniture",
  "sustainability",
  "historical homes",
  "restoration",
  "wood",
  "steel",
  "craftsman",
  "stone",
  "brick",
  "masonry",
  "eco friendly",
  "green buildings"
]

# Add the specialties to the database
specialties.each do |specialty_name|
  Specialty.find_or_create_by(name: specialty_name)
end

puts "Specialties have been seeded."

# Create Users

testUser = User.create!(
  name: 'Ian',
  email: 'ian@ian.com',
  password: 'ian'
)

user1 = User.create!(
  name: "Maria Lopez",
  email: "maria@test.com",
  password: "maria"
)

user2 = User.create!(
  name: "Michael Rios",
  email: "michael@test.com",
  password: "michael"
)

user2 = User.create!(
  name: "James Jameson",
  email: "james@test.com",
  password: "james"
)


# Create Designer Profile



designer1 = DesignerProfile.create!(
  user: user1,
  name: user1.name,
  location: "New York",
  language: "English",
  bio: "Maria is a high end residential architect working out of Los Angeles, CA for the last 6 years. Trusted specialist in MCM and restoring classic architecture.",
  price_range: 4,
  lgbtq_owned: true,
  minority_owned: true,
  fluent_in_spanish: true
)

photo_path = Rails.root.join("public/images/carlaProfile.jpg")
cover_path = Rails.root.join("public/images/carla1.jpg")
raise "Missing photo" unless File.exist?(photo_path)
raise "Missing cover" unless File.exist?(cover_path)

designer1.photo.attach(
  io: File.open(photo_path),
  filename: "carlaProfile.jpg",
  content_type: "image/jpeg"
)

designer1.cover_photo.attach(
  io: File.open(cover_path),
  filename: "carla1.jpg",
  content_type: "image/jpeg"
)

puts "Attached designer1 images"

designer1.specialties << Specialty.find_by(name: "mid century")
designer1.specialties << Specialty.find_by(name: "restoration")
designer1.specialties << Specialty.find_by(name: "historical homes")
designer1.save!

designer2 = DesignerProfile.create!(
  user: user2,
  name: user2.name,
  location: "New York",
  language: "English, Spanish",
  bio: 'Hello! Licensed architect based out of Los Angeles with over 5 years of experience. Reach out about fireproofing your home!',
  price_range: 3,
  lgbtq_owned: false,
  minority_owned: false,
  fluent_in_spanish: true
)

photo_path = Rails.root.join("public/images/michaelProfile.jpeg")
cover_path = Rails.root.join("public/images/michael1.jpg")
raise "Missing photo" unless File.exist?(photo_path)
raise "Missing cover" unless File.exist?(cover_path)

designer2.photo.attach(
  io: File.open(photo_path),
  filename: "michaelProfile.jpeg",
  content_type: "image/jpeg"
)

designer2.cover_photo.attach(
  io: File.open(cover_path),
  filename: "michael1.jpg",
  content_type: "image/jpeg"
)

puts "Attached designer2 images"

designer2.specialties << Specialty.find_by(name: "modern")
designer2.specialties << Specialty.find_by(name: "custom furniture")
designer2.specialties << Specialty.find_by(name: "eco friendly")
designer2.save!

testUser = User.create!(
  name: "Test User",
  email: "testuser@test.com",
  password: "password"
)

designer3 = DesignerProfile.create!(
  user: testUser,
  name: testUser.name,
  location: "New York",
  language: "English",
  bio: 'hey there i am a great designman',
  price_range: 2,
  lgbtq_owned: false,
  minority_owned: true,
  fluent_in_spanish: false
)


designer3.photo.attach(
  io: File.open(photo_path),
  filename: "michaelProfile.jpeg",
  content_type: "image/jpeg"
)

designer3.cover_photo.attach(
  io: File.open(cover_path),
  filename: "michael1.jpg",
  content_type: "image/jpeg"
)

puts "Attached designer3 images"

designer3.specialties << Specialty.find_by(name: "sustainability")
designer3.specialties << Specialty.find_by(name: "green buildings")
designer3.specialties << Specialty.find_by(name: "wood")
designer3.save!



# Create Business Profile


ianBusiness = BusinessProfile.create!(
  user: testUser,
  photo: "images/michaelProfile.jpeg",
  name: testUser.name,
  location: "Erie, PA",
  language: "English",
  bio: "Faker::Lorem.paragraph"
)




business = BusinessProfile.create!(
  user: user2,
  photo: "images/michaelProfile.jpeg",
  name: user2.name,
  location: "San Francisco",
  language: "Spanish",
  bio: "Faker::Lorem.paragraph"
)

# Create Portfolios
designer_portfolio = Portfolio.create!(designer_profile: designer1)
business_portfolio = Portfolio.create!(business_profile: business)

# ian_portfolio = Portfolio.create!(designer_profile: designerIan)
ianBiz_portfolio = Portfolio.create!(business_profile: ianBusiness)

# Create Projects
project1 = Project.create!(
  portfolio: designer_portfolio,
  title: "Luxury Villa",
  description: "A modern villa design with eco-friendly materials."
)

project2 = Project.create!(
  portfolio: business_portfolio,
  title: "Downtown Office Space",
  description: "A high-rise office with innovative workspace solutions."
)



projectIanD = Project.create!(
  portfolio: ianBiz_portfolio,
  title: "BLAH BLAH",
  description: "A high-rise office with innovative workspace solutions."
)


projectIanB = Project.create!(
  portfolio: ianBiz_portfolio,
  title: "IAN BIZ PORTFOLIO DO THAT",
  description: "A high-rise office with innovative workspace solutions."
)


# Create Photos
# Photo.create!(project: project1, image_url: "https://example.com/villa.jpg")
# Photo.create!(project: project2, image_url: "https://example.com/office.jpg")


# Photo.create!(project: projectIanD, image_url: "https://example.com/villa.jpg")
# Photo.create!(project: projectIanB, image_url: "https://example.com/office.jpg")

# Create Connections
Connection.create!(user: user1, connected_user: user2, status: "accepted")

# Create Reviews
Review.create!(reviewer: user1, reviewee: user2, rating: 5, comment: "Great collaboration!")
Review.create!(reviewer: user2, reviewee: user1, rating: 4, comment: "Very professional.")

puts "Seeding completed!"