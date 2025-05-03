Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins "https://trussstart.onrender.com", "https://trussmade.com" # Change this to your frontend URL in production
      resource "*",
        headers: :any,
        expose: ['Content-Disposition'],
        methods: [:get, :post, :put, :delete, :options],
        credentials: true # Required for session cookies
    end
  end