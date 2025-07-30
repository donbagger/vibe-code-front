import { Card, CardContent } from './ui/card';

interface PartnerBadgeProps {
  partnerName: string;
  partnerLogo?: string;
  edition: string;
}

export function PartnerBadge({ partnerName, partnerLogo, edition }: PartnerBadgeProps) {
  return (
    <Card className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-500/30">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="text-sm text-blue-400 font-medium">
            This Edition Co-hosted with
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              {partnerLogo ? (
                <img src={partnerLogo} alt={partnerName} className="w-8 h-8" />
              ) : (
                <span className="text-xl">🚀</span>
              )}
            </div>
            <div>
              <div className="font-semibold text-blue-300">{partnerName}</div>
              <div className="text-xs text-muted-foreground">Edition {edition}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}