import React from 'react';

export const ServiceVisual: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'residential':
      return (
        <div className="relative w-full h-44 sm:h-48 bg-emerald-50/60 rounded-2xl flex items-center justify-center p-3 overflow-hidden border border-emerald-100/50">
          {/* Subtle green circle backdrop */}
          <div className="absolute w-36 h-36 bg-[#cbe3d6] rounded-full -bottom-4 -left-4 opacity-70"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-3">
            {/* House Miniature SVG */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-stone-100 rounded-xl shadow-lg border-2 border-stone-200 p-2 flex flex-col justify-between transform -rotate-3 hover:rotate-0 transition-transform">
              <div className="w-full h-8 bg-amber-900/80 rounded-t-lg flex items-center justify-center text-white text-[10px] font-bold">
                HOME
              </div>
              <div className="grid grid-cols-2 gap-1.5 p-1">
                <div className="h-5 bg-amber-200/80 rounded border border-amber-300 flex items-center justify-center text-[8px] text-amber-900 font-bold">💡</div>
                <div className="h-5 bg-amber-200/80 rounded border border-amber-300 flex items-center justify-center text-[8px] text-amber-900 font-bold">💡</div>
              </div>
              <div className="w-5 h-6 bg-stone-700 rounded-t mx-auto"></div>
            </div>

            {/* Ceiling Fan & Switchboard */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-stone-900 rounded-full flex items-center justify-center text-amber-400 text-xl shadow-md animate-spin-slow">
                ⚙️
              </div>
              <div className="w-12 h-14 bg-white rounded-lg border border-stone-300 shadow p-1 flex flex-col justify-around">
                <div className="w-full h-2 bg-stone-200 rounded"></div>
                <div className="flex justify-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-stone-800"></div>
                  <div className="w-2 h-2 rounded-full bg-stone-800"></div>
                </div>
                <div className="w-3 h-1 bg-red-500 rounded mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'panel':
      return (
        <div className="relative w-full h-44 sm:h-48 bg-emerald-50/60 rounded-2xl flex items-center justify-center p-3 overflow-hidden border border-emerald-100/50">
          <div className="absolute w-36 h-36 bg-[#cbe3d6] rounded-full -top-4 -right-4 opacity-70"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-3">
            {/* Double pole MCB Breakers */}
            <div className="w-12 h-24 bg-stone-100 rounded-lg border-2 border-stone-300 shadow-md p-1 flex flex-col justify-between items-center">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div className="w-6 h-10 bg-stone-800 rounded flex flex-col items-center justify-center">
                <div className="w-4 h-3 bg-red-600 rounded"></div>
              </div>
              <div className="text-[8px] font-bold text-stone-600">63A</div>
            </div>

            {/* Main Distribution Board */}
            <div className="w-28 h-28 bg-stone-200 rounded-xl border-2 border-stone-400 shadow-lg p-2 flex flex-col justify-between">
              <div className="flex justify-between items-center px-1">
                <span className="text-[8px] font-bold text-stone-600">MAIN DB</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <div className="grid grid-cols-4 gap-1 bg-stone-800 p-1.5 rounded">
                <div className="h-6 bg-stone-300 rounded-xs"></div>
                <div className="h-6 bg-stone-300 rounded-xs"></div>
                <div className="h-6 bg-red-500 rounded-xs"></div>
                <div className="h-6 bg-stone-300 rounded-xs"></div>
              </div>
              <div className="w-full h-2 bg-stone-300 rounded flex items-center justify-end px-1">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
              </div>
            </div>

            {/* Yellow Earthing Grounding Badge as in Ref Image 6 */}
            <div className="w-12 h-12 rounded-full bg-amber-400 border-2 border-stone-900 flex flex-col items-center justify-center shadow-md -ml-2">
              <div className="w-5 h-0.5 bg-stone-900"></div>
              <div className="w-0.5 h-2 bg-stone-900"></div>
              <div className="w-4 h-0.5 bg-stone-900"></div>
              <div className="w-2.5 h-0.5 bg-stone-900 mt-0.5"></div>
              <div className="w-1 h-0.5 bg-stone-900 mt-0.5"></div>
            </div>
          </div>
        </div>
      );

    case 'backup':
      return (
        <div className="relative w-full h-44 sm:h-48 bg-emerald-50/60 rounded-2xl flex items-center justify-center p-3 overflow-hidden border border-emerald-100/50">
          <div className="absolute w-36 h-36 bg-[#cbe3d6] rounded-full bottom-0 right-0 opacity-70"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-2">
            {/* Inverter UPS & Battery */}
            <div className="flex flex-col gap-1.5">
              <div className="w-20 h-16 bg-stone-900 rounded-lg shadow-lg border border-stone-700 p-1.5 flex flex-col justify-between">
                <div className="w-8 h-3 bg-emerald-950 border border-emerald-500 rounded flex items-center justify-center text-[7px] text-emerald-400 font-mono">
                  230V OK
                </div>
                <div className="flex justify-between items-center text-[8px] text-stone-400">
                  <span>PURE SINE</span>
                  <span className="text-amber-400">⚡</span>
                </div>
              </div>

              <div className="w-20 h-10 bg-amber-950 rounded-md border border-amber-800 shadow p-1 flex items-center justify-between">
                <div className="w-2 h-2 rounded-full bg-red-600"></div>
                <span className="text-[7px] font-bold text-amber-200">150Ah TALL</span>
                <div className="w-2 h-2 rounded-full bg-stone-900"></div>
              </div>
            </div>

            {/* Solar Panel Array */}
            <div className="w-16 h-22 bg-blue-900 rounded-lg border-2 border-stone-300 shadow-md p-1 grid grid-cols-2 grid-rows-3 gap-0.5 transform rotate-6">
              <div className="bg-blue-600/80 border border-blue-400/40 rounded-xs"></div>
              <div className="bg-blue-600/80 border border-blue-400/40 rounded-xs"></div>
              <div className="bg-blue-600/80 border border-blue-400/40 rounded-xs"></div>
              <div className="bg-blue-600/80 border border-blue-400/40 rounded-xs"></div>
              <div className="bg-blue-600/80 border border-blue-400/40 rounded-xs"></div>
              <div className="bg-blue-600/80 border border-blue-400/40 rounded-xs"></div>
            </div>

            {/* EV Charger */}
            <div className="w-9 h-18 bg-stone-800 rounded-lg border border-stone-600 shadow flex flex-col items-center justify-between py-1">
              <div className="w-5 h-3 bg-emerald-400 rounded-xs text-[6px] text-black font-bold flex items-center justify-center">
                EV
              </div>
              <div className="w-3 h-3 rounded-full bg-stone-900 border border-stone-400"></div>
              <div className="w-1 h-4 bg-stone-600 rounded-full"></div>
            </div>
          </div>
        </div>
      );

    case 'smart':
      return (
        <div className="relative w-full h-44 sm:h-48 bg-emerald-50/60 rounded-2xl flex items-center justify-center p-3 overflow-hidden border border-emerald-100/50">
          <div className="absolute w-36 h-36 bg-[#cbe3d6] rounded-full top-0 left-0 opacity-70"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-3">
            {/* Smart Touch Panel Tablet */}
            <div className="w-26 h-20 bg-stone-900 rounded-xl border-2 border-stone-700 shadow-xl p-1.5 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[7px] text-stone-400">
                <span>10:30</span>
                <span className="text-emerald-400">● Wi-Fi</span>
              </div>
              <div className="grid grid-cols-3 gap-1">
                <div className="h-6 bg-blue-900/80 rounded flex items-center justify-center text-[10px]">💡</div>
                <div className="h-6 bg-amber-900/80 rounded flex items-center justify-center text-[10px]">🔒</div>
                <div className="h-6 bg-emerald-900/80 rounded flex items-center justify-center text-[10px]">❄️</div>
              </div>
              <div className="w-8 h-1 bg-stone-600 rounded mx-auto"></div>
            </div>

            {/* Smart RGB Bulb */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-400 via-amber-300 to-indigo-400 shadow-lg shadow-pink-500/30 flex items-center justify-center">
                <span className="text-white text-xs font-bold">RGB</span>
              </div>
              <div className="w-4 h-3 bg-stone-300 rounded-b"></div>
              <div className="w-3 h-2 bg-stone-400"></div>
            </div>

            {/* Security Dome Camera */}
            <div className="w-14 h-14 bg-stone-100 rounded-full border-2 border-stone-300 shadow-md flex items-center justify-center p-1">
              <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center border-2 border-stone-600">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'maintenance':
      return (
        <div className="relative w-full h-44 sm:h-48 bg-emerald-50/60 rounded-2xl flex items-center justify-center p-3 overflow-hidden border border-emerald-100/50">
          <div className="absolute w-36 h-36 bg-[#cbe3d6] rounded-full -bottom-2 -right-2 opacity-70"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-3">
            {/* Yellow Digital Multimeter */}
            <div className="w-20 h-28 bg-amber-400 rounded-2xl border-2 border-stone-800 shadow-xl p-1.5 flex flex-col justify-between items-center transform -rotate-6">
              <div className="w-16 h-7 bg-[#9bb59b] rounded border border-stone-800 flex items-center justify-center font-mono font-bold text-xs text-stone-900">
                238.4 V
              </div>
              <div className="w-9 h-9 rounded-full bg-stone-800 border border-stone-600 flex items-center justify-center">
                <div className="w-1 h-3 bg-red-500 rounded-full transform rotate-45"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
              </div>
            </div>

            {/* Wall Socket + Screwdriver */}
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 bg-white rounded-xl border-2 border-stone-300 shadow p-2 flex flex-col justify-center items-center">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-stone-800 rounded-full"></div>
                  <div className="w-2 h-2 bg-stone-800 rounded-full"></div>
                </div>
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full mt-1.5"></div>
              </div>

              {/* Insulated Screwdriver */}
              <div className="flex flex-col items-center -rotate-12">
                <div className="w-2 h-14 bg-stone-400 rounded-t"></div>
                <div className="w-4 h-12 bg-amber-600 rounded-b-lg border border-amber-800"></div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'industrial':
      return (
        <div className="relative w-full h-44 sm:h-48 bg-emerald-50/60 rounded-2xl flex items-center justify-center p-3 overflow-hidden border border-emerald-100/50">
          <div className="absolute w-36 h-36 bg-[#cbe3d6] rounded-full top-0 right-0 opacity-70"></div>
          
          <div className="relative z-10 flex items-center justify-center gap-3">
            {/* 3-Phase Heavy Duty Motor */}
            <div className="w-24 h-22 bg-stone-700 rounded-xl border-2 border-stone-900 shadow-xl p-1.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="w-4 h-3 bg-stone-500 rounded-xs"></div>
                <span className="text-[7px] text-amber-300 font-bold">15 HP</span>
              </div>
              <div className="flex gap-0.5 py-1">
                <div className="w-2 h-8 bg-stone-800 rounded-xs"></div>
                <div className="w-2 h-8 bg-stone-800 rounded-xs"></div>
                <div className="w-2 h-8 bg-stone-800 rounded-xs"></div>
                <div className="w-2 h-8 bg-stone-800 rounded-xs"></div>
                <div className="w-2 h-8 bg-stone-800 rounded-xs"></div>
              </div>
              <div className="w-full h-1.5 bg-stone-500 rounded"></div>
            </div>

            {/* Industrial Control Enclosure with pilot lamps */}
            <div className="w-20 h-28 bg-stone-300 rounded-xl border-2 border-stone-500 shadow-lg p-2 flex flex-col justify-between">
              <div className="grid grid-cols-3 gap-1">
                <div className="w-3 h-3 rounded-full bg-red-600 shadow-sm animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-600 shadow-sm"></div>
              </div>
              <div className="w-full h-8 bg-stone-800 rounded p-1 flex items-center justify-around">
                <div className="w-3 h-3 bg-stone-100 rounded-xs"></div>
                <div className="w-3 h-3 bg-red-600 rounded-xs"></div>
              </div>
              <div className="w-4 h-4 rounded-full bg-red-700 border-2 border-stone-800 mx-auto" title="E-Stop"></div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};
