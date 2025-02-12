import { TPermission } from "lib/api/roles-and-permissions/get-permissions";

export type TUserAuthPayload = {
  id: number;
  userId: number;
  roleId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
  role: Role;
};

interface Role {
  id: number;
  name: string;
  label: string;
  createdAt: string;
  updatedAt: string;
  permissions: Permission2[];
}

interface Permission2 {
  id: number;
  permissionId: number;
  roleId: number;
  createdAt: string;
  updatedAt: string;
  permission: TPermission;
}

export type TUser = {
  id: number;
  fullName: string;
  email: string;
  isSocial: boolean;
  isVerified: boolean;
  lastLogin?: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};
