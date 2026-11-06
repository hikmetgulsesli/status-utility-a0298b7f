// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="w-full flex-grow flex flex-col" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_OBS_ROUTE_UNCHANGED OBS_REFRESH_STATUS_OBS_STATUS_TEXT OBS_REFRESH_STATUS_OBS_STATUS_VALUE">
          {/* Top Bar */}
          <header className="w-full border-b border-slate-200 bg-white">
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-semibold text-base shadow-sm">
                  S
                </div>
                <div>
                  <div className="font-semibold text-slate-900 leading-tight">Status Utility</div>
                  <div className="text-xs text-slate-500 font-mono">/status</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Operational</span>
              </div>
            </div>
          </header>
      
          {/* Main Content Container */}
          <main className="max-w-5xl mx-auto px-6 py-12 flex-grow w-full flex flex-col justify-center">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 max-w-2xl mx-auto w-full">
              {/* Header & Action Button */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">System Status</h1>
                  <p className="text-sm text-slate-500 mt-1">Real-time health overview and diagnostics snapshot</p>
                </div>
                <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex items-center space-x-2 shrink-0" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_OBS_REFRESH_BUTTON" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                  <span>Refresh Status</span>
                </button>
              </div>
      
              {/* Observables & Status Information */}
              <div className="mt-6 bg-slate-50 border border-slate-200/80 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">Application State</span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">active</span>
                </div>
                <div className="mt-3 text-sm text-slate-700">
                  Status refreshed: Current engine state is <span className="font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-xs">refreshed</span>.
                </div>
              </div>
      
              {/* Metrics Grid (Non-actionable decorative info) */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Service Route</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-slate-700">/status</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Telemetry Latency</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-slate-700">14 ms</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Sync Integrity</div>
                  <div className="mt-1 font-mono text-sm font-semibold text-emerald-600">100% Verified</div>
                </div>
              </div>
            </div>
          </main>
      
          {/* Footer */}
          <footer className="w-full border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
            Status Utility © 2025. All systems monitored.
          </footer>
        </div>
    </>
  );
}
