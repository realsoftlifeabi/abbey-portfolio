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
    'https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~01db646c42ed34df32?mp_source=share',
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
    'https://freelancerprofilenuxt.mesh.prod.platform.usw2.upwork/freelancers/~01db646c42ed34df32?mp_source=share',
  contactButtonText: 'View on Upwork',
  contactSectionHeading: "Let's Build Something Amazing Together",
  contactSectionSubheading:
    "Whether it's a modern web app, intuitive UI, or AI-powered product — I'm here to help bring your vision to life with clean code and exceptional design.",
};

// Get contact configuration based on environment
export const getContactConfig = (): ContactConfig => {
  const isUpworkVersion = process.env.NEXT_PUBLIC_DEPLOYMENT_TYPE === 'upwork';
  const showContactDetails = process.env.NEXT_PUBLIC_SHOW_CONTACT_DETAILS !== 'false';

  if (isUpworkVersion) {
    return upworkContactConfig;
  }

  return {
    ...defaultContactConfig,
    showContactDetails,
    showWhatsApp: showContactDetails && process.env.NEXT_PUBLIC_SHOW_WHATSAPP !== 'false',
    showEmail: showContactDetails && process.env.NEXT_PUBLIC_SHOW_EMAIL !== 'false',
    showPhone: showContactDetails && process.env.NEXT_PUBLIC_SHOW_PHONE === 'true',
    showDirectContact:
      showContactDetails && process.env.NEXT_PUBLIC_SHOW_DIRECT_CONTACT !== 'false',
  };
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
