export const deviceTypes = [
  {
    id: 'laptops',
    name: 'Laptops / PCs',
    icon: '💻',
    features: ['remote-access', 'device-lifecycle', 'fleet-visibility', 'remote-troubleshooting', 'real-time-alerts', 'diagnostic-tools'],
    benefits: 'Enable remote software updates, security patches, and troubleshooting without physical access. Monitor device health and performance across your entire fleet.'
  },
  {
    id: 'tablets',
    name: 'Tablets / Mobile Devices',
    icon: '📱',
    features: ['remote-access', 'fleet-visibility', 'real-time-alerts', 'device-lifecycle', 'custom-alerts'],
    benefits: 'Manage mobile device fleets remotely, enforce security policies, and monitor device status across multiple locations.'
  },
  {
    id: 'kiosks',
    name: 'Kiosks',
    icon: '🏪',
    features: ['remote-access', 'real-time-alerts', 'service-network', 'diagnostic-tools', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Remote content updates, automatic health checks, and uptime monitoring—eliminating the need for onsite technicians and increasing service reliability.'
  },
  {
    id: 'digital-signage',
    name: 'Digital Signage',
    icon: '📺',
    features: ['remote-access', 'real-time-alerts', 'service-network', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Schedule and update content remotely, monitor display health, and ensure continuous operation across multiple locations.'
  },
  {
    id: 'cameras',
    name: 'Cameras / NVRs',
    icon: '📹',
    features: ['remote-access', 'real-time-alerts', 'diagnostic-tools', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Monitor camera health, receive alerts for connectivity issues, and remotely troubleshoot recording problems.'
  },
  {
    id: 'smart-pdus',
    name: 'Smart PDUs',
    icon: '⚡',
    features: ['remote-access', 'real-time-alerts', 'diagnostic-tools', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Monitor power consumption, receive alerts for power issues, and remotely manage power distribution across your infrastructure.'
  },
  {
    id: 'payment-terminals',
    name: 'Payment Terminals',
    icon: '💳',
    features: ['remote-access', 'real-time-alerts', 'diagnostic-tools', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Ensure payment systems are always operational, receive alerts for connectivity issues, and remotely update security patches.'
  },
  {
    id: 'pos-systems',
    name: 'POS Systems',
    icon: '🛒',
    features: ['remote-access', 'real-time-alerts', 'diagnostic-tools', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Monitor transaction systems, receive alerts for downtime, and remotely troubleshoot issues to minimize business disruption.'
  },
  {
    id: 'iot-devices',
    name: 'Custom IoT Devices',
    icon: '🔌',
    features: ['remote-access', 'real-time-alerts', 'diagnostic-tools', 'custom-alerts', 'fleet-visibility'],
    benefits: 'Manage diverse IoT ecosystems, monitor device health, and receive alerts for any connectivity or performance issues.'
  }
];

export const features = {
  'remote-access': {
    name: 'Remote Access',
    description: 'Securely access and control devices from anywhere in the world.',
    priority: 'Essential',
    icon: '🔗'
  },
  'custom-alerts': {
    name: 'Custom Alerts',
    description: 'Set up personalized notifications for specific device events and conditions.',
    priority: 'Essential',
    icon: '🔔'
  },
  'device-lifecycle': {
    name: 'Device Lifecycle Management',
    description: 'Track devices from deployment to retirement with comprehensive lifecycle tools.',
    priority: 'Advanced',
    icon: '📊'
  },
  'remote-troubleshooting': {
    name: 'Remote Troubleshooting',
    description: 'Diagnose and resolve issues without physical access to devices.',
    priority: 'Essential',
    icon: '🔧'
  },
  'fleet-visibility': {
    name: 'Fleet Visibility',
    description: 'Get a comprehensive view of all your devices in one centralized dashboard.',
    priority: 'Essential',
    icon: '👁️'
  },
  'real-time-alerts': {
    name: 'Real-time Alerts',
    description: 'Receive instant notifications when devices need attention.',
    priority: 'Essential',
    icon: '⚡'
  },
  'service-network': {
    name: 'Service Network',
    description: 'Connect to a network of service providers for on-site support when needed.',
    priority: 'Optional',
    icon: '🌐'
  },
  'diagnostic-tools': {
    name: 'Diagnostic Tools',
    description: 'Advanced monitoring and diagnostic capabilities for proactive maintenance.',
    priority: 'Advanced',
    icon: '🔍'
  }
}; 