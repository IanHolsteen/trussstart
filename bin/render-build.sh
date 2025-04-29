#!/usr/bin/env bash
# exit on error
set -o errexit

# Install Ruby gems
bundle install

# Install NPM dependencies for the frontend
npm install --prefix client

# Build the Next.js app
npm run build-and-export --prefix client

# Copy the built files from Next.js to Rails public folder
cp -a client/out/. public/

# Run Rails migrations
bundle exec rake db:migrate

# Optionally, seed the database
bundle exec rake db:seed

# Optionally, precompile assets if needed
bundle exec rake assets:precompile

# Optionally, clean assets if needed
bundle exec rake assets:clean

echo "Deployment complete!"