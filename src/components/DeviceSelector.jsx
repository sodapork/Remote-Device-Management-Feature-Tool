import React from 'react';

const DeviceSelector = ({ devices, selectedDevices, onDeviceToggle }) => {
  return (
    <div className="space-y-3">
      {devices.map((device) => (
        <label
          key={device.id}
          className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
        >
          <input
            type="checkbox"
            checked={selectedDevices.includes(device.id)}
            onChange={() => onDeviceToggle(device.id)}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <div className="ml-3 flex items-center">
            <span className="text-2xl mr-3">{device.icon}</span>
            <span className="text-gray-900 font-medium">{device.name}</span>
          </div>
        </label>
      ))}
      
      {selectedDevices.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Select one or more device types to see recommendations</p>
        </div>
      )}
    </div>
  );
};

export default DeviceSelector; 