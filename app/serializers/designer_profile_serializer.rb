class DesignerProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :language, :bio, :photo_url, :cover_photo_url, :price_range, :lgbtq_owned, :minority_owned, :fluent_in_spanish, :specialties

  def specialties
    object.specialties.pluck(:name)
  end

  def as_json(options = {})
    super(options).merge({
      projects: object.portfolios.flat_map(&:projects)
    })
  end

  def photo_url
    return unless object.photo.attached?

    Rails.application.routes.url_helpers.rails_blob_path(object.photo, only_path: true)
  end

  def cover_photo_url
    return unless object.cover_photo.attached?

    Rails.application.routes.url_helpers.rails_blob_path(object.cover_photo, only_path: true)
  end
end