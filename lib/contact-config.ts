// Contact configuration system for different deployment environments
export interface ContactConfig {
  showContactDetails: boolean;
  showWhatsApp: boolean;
  showEmail: boolean;
  showPhone: boolean;
  showDirectContact: boolean;
  whatsappNumber?: string;
  emailAddress?: string;
  phoneNumber?: string;
  upworkProfileUrl?: string;
  upworkProfileName?: string;
  contactButtonText: string;
  contactSectionHeading: string;
  contactSectionSubheading: string;
}

// Default configuration (full contact details)
export const defaultContactConfig: ContactConfig = {
  showContactDetails: true,
  showWhatsApp: true,
  showEmail: true,
  showPhone: false,
  showDirectContact: true,
  whatsappNumber: '2348091565803',
  emailAddress: 'assistant.abbey@gmail.com',
  upworkProfileUrl:
    process.env.NEXT_PUBLIC_UPWORK_PROFILE_URL ||
    'https://www.upwork.com/freelancers/~01db646c42ed34df32?companyReference=1682767900823359489&mp_source=share',
  upworkProfileName: process.env.NEXT_PUBLIC_UPWORK_PROFILE_NAME || 'Abiodun Sanni',
  contactButtonText: 'Get In Touch',
  contactSectionHeading: "Let's Build Something Amazing Together",
  contactSectionSubheading:
    "Whether it's a modern web app, intuitive UI, or AI-powered product — I'm here to help bring your vision to life with clean code and exceptional design.",
};

// Upwork-safe configuration (no direct contact details)
export const upworkContactConfig: ContactConfig = {
  showContactDetails: true,
  showWhatsApp: false,
  showEmail: false,
  showPhone: false,
  showDirectContact: false,
  upworkProfileUrl:
    process.env.NEXT_PUBLIC_UPWORK_PROFILE_URL ||
    'https://www.upwork.com/freelancers/~01db646c42ed34df32?companyReference=1682767900823359489&mp_source=share',
  upworkProfileName: process.env.NEXT_PUBLIC_UPWORK_PROFILE_NAME || 'Abiodun Sanni',
  contactButtonText: 'View on Upwork',
  contactSectionHeading: "Let's Build Something Amazing Together",
  contactSectionSubheading:
    "Whether it's a modern web app, intuitive UI, or AI-powered product — I'm here to help bring your vision to life with clean code and exceptional design.",
};

// Helper to check if current build is Upwork-safe variant
export const isUpwork = (): boolean => process.env.NEXT_PUBLIC_DEPLOYMENT_TYPE === 'upwork';

// Get contact configuration based on environment
export const getContactConfig = (): ContactConfig => {
  const isUpworkVersion = isUpwork();
  if (isUpworkVersion) {
    return upworkContactConfig;
  }

  // Non-Upwork: use defaults (WhatsApp/Email visible, phone hidden, direct contact enabled)
  return defaultContactConfig;
};

// Helper function to check if contact methods should be shown
export const shouldShowContactMethod = (
  method: 'whatsapp' | 'email' | 'phone' | 'direct',
): boolean => {
  const config = getContactConfig();

  switch (method) {
    case 'whatsapp':
      return config.showWhatsApp && !!config.whatsappNumber;
    case 'email':
      return config.showEmail && !!config.emailAddress;
    case 'phone':
      return config.showPhone && !!config.phoneNumber;
    case 'direct':
      return config.showDirectContact;
    default:
      return false;
  }
};
