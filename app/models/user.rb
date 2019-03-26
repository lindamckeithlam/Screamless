class User < ApplicationRecord
  validates :username, :last_name, :first_name, :password_digest, :session_token, presence: true
  validates :session_token, :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader: :password

  def password=(password) 
    self.password_digest = BCrypt.create(password)
    @password = password
  end 

  def is_password?(password)
    BCrypt.new(self.password_digest).is_password?(password)
  end 

  def ensure_session_token 
    self.session_token ||= self.class.generate_session_token
  end 

  
  def reset_session_token 
    self.update(self.session_token = self.class.generate_session_token)
    return self.session_token
  end 
  

  private 
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
  end 
  
  def self.generate_session_token 
    SecureRandom::urlsafe_base64
  end 
end
