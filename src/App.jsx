import React, { useState } from 'react';
import DeviceSelector from './components/DeviceSelector';
import ResultsPanel from './components/ResultsPanel';
import { deviceTypes } from './data/devices';

function App() {
  const [selectedDevices, setSelectedDevices] = useState([]);

  const handleDeviceToggle = (deviceId) => {
    setSelectedDevices(prev => 
      prev.includes(deviceId) 
        ? prev.filter(id => id !== deviceId)
        : [...prev, deviceId]
    );
  };

  const selectedDeviceData = selectedDevices.map(id => 
    deviceTypes.find(device => device.id === id)
  ).filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Remote Device Management Feature Tool
          </h1>
          <p className="text-lg text-gray-600">
            Select your device types to get personalized RDM recommendations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Device Selection Panel */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-4">Select Your Devices</h2>
            <DeviceSelector 
              devices={deviceTypes}
              selectedDevices={selectedDevices}
              onDeviceToggle={handleDeviceToggle}
            />
          </div>

          {/* Results Panel */}
          <div className="card p-6">
            <ResultsPanel selectedDevices={selectedDeviceData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 