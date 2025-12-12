import React from 'react';

interface UserProfileProps {
  userId: string;
  username: string;
  email: string;
  avatar?: string;
  isActive?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  username,
  email,
  avatar,
  isActive = true,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    console.log('Saving user profile...');
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        {avatar && <img src={avatar} alt={username} className="avatar" />}
        <div className="profile-info">
          <h2>{username}</h2>
          <p>{email}</p>
          {isActive && <span className="badge">Active</span>}
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleEdit}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEdit}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export function getUserDisplayName(user: {
  firstName?: string;
  lastName?: string;
  username: string;
}) {
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }
  return user.username;
}

export function formatUserRole(role: string) {
  return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
}

export class UserManager {
  private users: Map<string, UserProfileProps>;

  constructor() {
    this.users = new Map();
  }

  addUser(user: UserProfileProps) {
    this.users.set(user.userId, user);
  }

  getUser(userId: string) {
    return this.users.get(userId);
  }

  removeUser(userId: string) {
    return this.users.delete(userId);
  }

  getAllUsers() {
    return Array.from(this.users.values());
  }
}

export interface UserSettings {
  theme: 'light' | 'dark';
  notifications: boolean;
  language: string;
}

export type UserRole = 'admin' | 'moderator' | 'user' | 'guest';

export type UserStatus = 'active' | 'inactive' | 'suspended' | 'pending';
