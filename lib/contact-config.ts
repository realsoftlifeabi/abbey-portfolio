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

// Base configuration (without environment variables)
const baseContactConfig = (
  isUpworkMode: boolean,
): Omit<
  ContactConfig,
  | 'upworkProfileUrl'
  | 'upworkProfileName'
  | 'contactButtonText'
  | 'contactSectionHeading'
  | 'contactSectionSubheading'
> => ({
  showContactDetails: true,
  showWhatsApp: !isUpworkMode,
  showEmail: !isUpworkMode,
  showPhone: false,
  showDirectContact: !isUpworkMode,
  whatsappNumber: '2348091565803',
  emailAddress: 'assistant.abbey@gmail.com',
});

// Helper to check if current build is Upwork-safe variant
export const isUpwork = (): boolean => process.env.NEXT_PUBLIC_DEPLOYMENT_TYPE === 'upwork';

// Get contact configuration based on environment
export const getContactConfig = (): ContactConfig => {
  const isUpworkVersion = isUpwork();

  // Read environment variables dynamically
  const upworkProfileUrl =
    process.env.NEXT_PUBLIC_UPWORK_PROFILE_URL ||
    'https://www.upwork.com/freelancers/~01db646c42ed34df32?companyReference=1682767900823359489&mp_source=share';

  const upworkProfileName = process.env.NEXT_PUBLIC_UPWORK_PROFILE_NAME || 'Abiodun Sanni';

  if (isUpworkVersion) {
    return {
      ...baseContactConfig(true),
      upworkProfileUrl,
      upworkProfileName,
      contactButtonText: 'View on Upwork',
      contactSectionHeading: "Let's Build Something Amazing Together",
      contactSectionSubheading:
        "Whether it's a modern web app, intuitive UI, or AI-powered product — I'm here to help bring your vision to life with clean code and exceptional design.",
    };
  }

  // Full deployment: Show all contact methods including Upwork profile
  return {
    ...baseContactConfig(false),
    upworkProfileUrl,
    upworkProfileName,
    // In full deployment, show all contact methods
    showWhatsApp: true,
    showEmail: true,
    showDirectContact: true,
    contactButtonText: 'Get In Touch',
    contactSectionHeading: "Let's Build Something Amazing Together",
    contactSectionSubheading:
      "Whether it's a modern web app, intuitive UI, or AI-powered product — I'm here to help bring your vision to life with clean code and exceptional design.",
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
