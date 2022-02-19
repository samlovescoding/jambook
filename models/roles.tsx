import { Schema, model, models } from 'mongoose';

const schema = new Schema({
  name: String,

  // Permissions
  canCreate: [String],
  canEdit: [String],
  canDelete: [String],
  canRead: [String],
  canManage: [String],

  // File Permissions
  canViewFiles: Boolean,
  canEditFiles: Boolean,

  // Admin Level Permissions
  canCreateModels: Boolean,
  canManageApplications: Boolean,
  canApproveUsers: Boolean,
  canManageUserRoles: Boolean,
  canViewJambookSettings: Boolean,
  canEditJambookSettings: Boolean,
  canViewEnvironmentSettings: Boolean,
  canEditEnvironmentSettings: Boolean,
});

let Role;

if (models.role) {
  Role = model('role');
} else {
  Role = model('role', schema);
}

export default Role;
