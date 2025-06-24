# Remote Device Management Feature Tool

An interactive web-based tool that helps users discover recommended RDM features based on their device stack. Users can select from various device types and receive personalized recommendations for Remote Device Management features.

## Features

- **Device Selection**: Interactive checklist with 9 common device types
- **Dynamic Recommendations**: Personalized RDM feature suggestions based on selected devices
- **Feature Prioritization**: Features categorized as Essential, Optional, or Advanced
- **Benefits Analysis**: Customized benefits explanation for the selected device stack
- **Export Functionality**: Export results as text file or email
- **Modern UI**: Clean, responsive design with Tailwind CSS

## Device Types Supported

- Laptops / PCs
- Tablets / Mobile Devices
- Kiosks
- Digital Signage
- Cameras / NVRs
- Smart PDUs
- Payment Terminals
- POS Systems
- Custom IoT Devices

## RDM Features Covered

- Remote Access
- Custom Alerts
- Device Lifecycle Management
- Remote Troubleshooting
- Fleet Visibility
- Real-time Alerts
- Service Network
- Diagnostic Tools

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rdm-feature-tool
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Select Devices**: Check the boxes for the types of devices you manage
2. **View Recommendations**: See personalized RDM feature recommendations appear in the right panel
3. **Review Benefits**: Read about the specific benefits for your device stack
4. **Export Results**: Download your recommendations as a text file or email them

## Technology Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/
│   ├── DeviceSelector.jsx
│   ├── ResultsPanel.jsx
│   ├── FeatureCard.jsx
│   └── ExportButton.jsx
├── data/
│   └── devices.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Adding New Device Types

Edit `src/data/devices.js` and add new device objects to the `deviceTypes` array:

```javascript
{
  id: 'new-device',
  name: 'New Device Type',
  icon: '🔧',
  features: ['remote-access', 'fleet-visibility'],
  benefits: 'Description of benefits for this device type.'
}
```

### Adding New Features

Add new features to the `features` object in `src/data/devices.js`:

```javascript
'new-feature': {
  name: 'New Feature',
  description: 'Description of the feature.',
  priority: 'Essential', // or 'Optional' or 'Advanced'
  icon: '🔧'
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 