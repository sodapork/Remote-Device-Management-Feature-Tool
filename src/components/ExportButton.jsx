import React, { useState } from 'react';

const ExportButton = ({ selectedDevices, recommendedFeatures, combinedBenefits }) => {
  const [isExporting, setIsExporting] = useState(false);

  const generateReport = () => {
    const report = {
      selectedDevices: selectedDevices.map(device => device.name),
      recommendedFeatures: recommendedFeatures.map(feature => ({
        name: feature.name,
        description: feature.description,
        priority: feature.priority
      })),
      benefits: combinedBenefits,
      generatedAt: new Date().toISOString()
    };

    return report;
  };

  const exportAsPDF = async () => {
    setIsExporting(true);
    try {
      const report = generateReport();
      
      // Create a simple text-based report
      let reportText = 'RDM Feature Recommendations Report\n';
      reportText += '=====================================\n\n';
      
      reportText += 'Selected Devices:\n';
      report.selectedDevices.forEach(device => {
        reportText += `• ${device}\n`;
      });
      
      reportText += '\nRecommended Features:\n';
      report.recommendedFeatures.forEach(feature => {
        reportText += `• ${feature.name} (${feature.priority})\n`;
        reportText += `  ${feature.description}\n\n`;
      });
      
      reportText += 'Benefits:\n';
      reportText += report.benefits;
      
      reportText += '\n\nGenerated on: ' + new Date().toLocaleDateString();
      
      // Create and download file
      const blob = new Blob([reportText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'rdm-recommendations.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const emailResults = () => {
    const report = generateReport();
    const subject = encodeURIComponent('RDM Feature Recommendations');
    
    let body = 'Hello,\n\n';
    body += 'Here are my RDM feature recommendations based on my device selection:\n\n';
    
    body += 'Selected Devices:\n';
    report.selectedDevices.forEach(device => {
      body += `• ${device}\n`;
    });
    
    body += '\nRecommended Features:\n';
    report.recommendedFeatures.forEach(feature => {
      body += `• ${feature.name} (${feature.priority})\n`;
      body += `  ${feature.description}\n\n`;
    });
    
    body += 'Benefits:\n';
    body += report.benefits;
    
    body += '\n\nBest regards';
    
    const mailtoLink = `mailto:?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-gray-900">Export Your Results</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={exportAsPDF}
          disabled={isExporting}
          className="btn-secondary flex items-center"
        >
          {isExporting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Exporting...
            </>
          ) : (
            <>
              📄 Export as Text
            </>
          )}
        </button>
        
        <button
          onClick={emailResults}
          className="btn-secondary flex items-center"
        >
          📧 Email Results
        </button>
      </div>
    </div>
  );
};

export default ExportButton; 