import { Credentials } from "google-auth-library";

declare global {
  interface Window {
    gcloudTasks: GCloudTasks;
  }

  type Nullable<T> = T | null;
  type Undefinable<T> = T | undefined;
  type Unknown<T> = T | null | undefined;
}

export interface CurrentUser {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  link: string;
  picture: string;
  locale: string;
  hd: string;
}

export interface GCloudTasks {
  auth: AuthTasks;
}

export interface AuthTasks {
  getAuthorizationUrl: (scopes: string[]) => string;
  getToken: (code: string) => Promise<Credentials>;
  getCredentials: () => Credentials;
  setCredentials: (
    credentials: Credentials,
    projectId?: string
  ) => Promise<void>;
  unsetCredentials: () => void;
  getCurrentUser: () => Promise<CurrentUser | null>;
}
