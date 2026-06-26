// Application constants
// Global constants used throughout the application

export const APP_NAME = 'SmartfinanceAI';

// API endpoints
export const API_ENDPOINTS = {
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_LOGOUT: '/auth/logout',
  TRANSACTIONS: '/transactions',
  BUDGET: '/budget',
  REPORTS: '/reports',
  PROFILE: '/profile',
  AI_ADVISOR: '/ai-advisor',
};

// User roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  VIEWER: 'viewer',
};

// Transaction types
export const TRANSACTION_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
  TRANSFER: 'transfer',
};

// Chart colors
export const CHART_COLORS = {
  PRIMARY: '#6366f1',
  SECONDARY: '#8b5cf6',
  SUCCESS: '#10b981',
  DANGER: '#ef4444',
  WARNING: '#f59e0b',
  INFO: '#3b82f6',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE_NUMBER: 1,
};

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  API: 'YYYY-MM-DD',
  TIME: 'hh:mm A',
};

// Storage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER: 'user',
  THEME: 'theme',
  PREFERENCES: 'preferences',
};

export default {
  APP_NAME,
  API_ENDPOINTS,
  USER_ROLES,
  TRANSACTION_TYPES,
  CHART_COLORS,
  PAGINATION,
  DATE_FORMATS,
  STORAGE_KEYS,
};
