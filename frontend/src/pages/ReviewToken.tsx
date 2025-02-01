import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertTriangle, ArrowLeft, Rocket, CheckCircle } from 'lucide-react';

export default function ReviewToken() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');

  if (!formData) {
    navigate('/create');
    return null;
  }

  const handleTokenDeployment = async () => {
    try {
      setIsDeploying(true);
      setDeploymentStatus('deploying');

      // Simulate token deployment (replace with actual deployment logic)
      await new Promise(resolve => setTimeout(resolve, 2000));

      setDeploymentStatus('success');
      
      // Navigate to home page with the new token data
      setTimeout(() => {
        navigate('/', { 
          state: { 
            formData,
            from: 'review' // Add a flag to identify where the navigation came from
          } 
        });
      }, 2000);
    } catch (error) {
      console.error('Deployment failed:', error);
      setDeploymentStatus('error');
    } finally {
      setIsDeploying(false);
    }
  };

  return (
    <div className="min-h-screen bg-black scanline relative">
      <div className="cyber-grid absolute inset-0"></div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="bg-black/80 backdrop-blur-sm shadow-xl rounded-lg overflow-hidden neon-border">
          <div className="px-8 py-6 border-b border-[#00ff66]/30">
            <h1 className="text-2xl font-cyber font-bold text-[#00ff66] neon-text">
              Almost There! Review Your Token Settings
            </h1>
            <p className="mt-2 text-[#00ff66]/80 font-cyber">
              Please review your token configuration carefully
            </p>
          </div>

          <div className="px-8 py-6">
            <div className="space-y-6">
              <div className="bg-black/50 border-l-4 border-[#00ff66] p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-[#00ff66]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-[#00ff66] font-cyber">
                      Make sure your settings are correct. Once deployed, they cannot
                      be changed!
                    </p>
                  </div>
                </div>
              </div>

              <dl className="space-y-4">
                <ReviewItem label="Token Name" value={formData.name} />
                <ReviewItem label="Token Symbol" value={formData.symbol} />
                <ReviewItem
                  label="Total Supply"
                  value={Number(formData.supply).toLocaleString()}
                />
                <ReviewItem
                  label="Auto-Burn Rate"
                  value={`${formData.burnRate}%`}
                />
                <ReviewItem
                  label="Liquidity Lock"
                  value={`${formData.lockDuration} months`}
                />
                <ReviewItem
                  label="Smart Shard Optimization"
                  value={formData.smartShard ? 'Enabled' : 'Disabled'}
                />
              </dl>

              {deploymentStatus === 'success' && (
                <div className="bg-[#00ff66]/10 border-l-4 border-[#00ff66] p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#00ff66]" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-[#00ff66] font-cyber">
                        Token deployed successfully! Redirecting to home page...
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {deploymentStatus === 'error' && (
                <div className="bg-red-900/10 border-l-4 border-red-500 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-500 font-cyber">
                        Deployment failed. Please try again.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-4 pt-6">
                <button
                  onClick={() => navigate('/create')}
                  disabled={isDeploying}
                  className="cyber-button flex-1 inline-flex justify-center items-center px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back & Edit
                </button>
                <button
                  onClick={handleTokenDeployment}
                  disabled={isDeploying}
                  className="cyber-button flex-1 inline-flex justify-center items-center px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  {isDeploying ? 'Launching...' : 'Launch Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewItem({ label, value }) {
  return (
    <div className="flex justify-between py-3 border-b border-[#00ff66]/20">
      <dt className="text-sm font-cyber font-medium text-[#00ff66]/60">{label}</dt>
      <dd className="text-sm font-cyber font-semibold text-[#00ff66]">{value}</dd>
    </div>
  );
}