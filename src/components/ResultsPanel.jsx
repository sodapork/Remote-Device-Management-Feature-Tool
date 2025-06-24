import React, { useMemo } from 'react';
import { features } from '../data/devices';
import FeatureCard from './FeatureCard';
import ExportButton from './ExportButton';

const ResultsPanel = ({ selectedDevices }) => {
  const { recommendedFeatures, combinedBenefits } = useMemo(() => {
    if (selectedDevices.length === 0) {
      return { recommendedFeatures: [], combinedBenefits: '' };
    }

    // Get all unique features from selected devices
    const allFeatures = new Set();
    selectedDevices.forEach(device => {
      device.features.forEach(feature => allFeatures.add(feature));
    });

    // Convert to array and sort by priority
    const featureArray = Array.from(allFeatures).map(featureId => ({
      id: featureId,
      ...features[featureId]
    }));

    // Sort by priority: Essential > Optional > Advanced
    const priorityOrder = { 'Essential': 1, 'Optional': 2, 'Advanced': 3 };
    featureArray.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    // Combine benefits from all selected devices
    const benefits = selectedDevices.map(device => device.benefits).join(' ');

    return {
      recommendedFeatures: featureArray,
      combinedBenefits: benefits
    };
  }, [selectedDevices]);

  if (selectedDevices.length === 0) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Your Recommendations</h2>
        <p className="text-gray-500">
          Select device types from the left panel to see personalized RDM recommendations
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Your Recommendations</h2>
      
      {/* Selected Devices Summary */}
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="font-medium text-primary-900 mb-2">Selected Devices:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedDevices.map(device => (
            <span
              key={device.id}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary-100 text-primary-800"
            >
              <span className="mr-1">{device.icon}</span>
              {device.name}
            </span>
          ))}
        </div>
      </div>

      {/* Recommended Features */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Recommended RDM Features</h3>
        <div className="space-y-3">
          {recommendedFeatures.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold text-green-900 mb-2">RDM Benefits for Your Device Stack</h3>
        <p className="text-green-800 leading-relaxed">
          {combinedBenefits}
        </p>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 rounded-lg text-white">
        <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
        <p className="mb-4 opacity-90">
          See how Canopy helps manage your device fleet with powerful RDM capabilities.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            → Learn More About Canopy
          </button>
          <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Export Section */}
      <div className="border-t pt-4">
        <ExportButton 
          selectedDevices={selectedDevices}
          recommendedFeatures={recommendedFeatures}
          combinedBenefits={combinedBenefits}
        />
      </div>
    </div>
  );
};

export default ResultsPanel; 