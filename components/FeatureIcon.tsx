interface FeatureIconProps {
  name: string;
  size?: number;
  color?: string;
}

const ICONS: Record<string, (color: string) => React.ReactNode> = {
  qrcode: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* canto superior esquerdo */}
      <rect x="2" y="2" width="8" height="8" rx="1.5" stroke={c} strokeWidth="1.75" fill="none"/>
      <rect x="4.5" y="4.5" width="3" height="3" rx="0.5" fill={c}/>
      {/* canto superior direito */}
      <rect x="14" y="2" width="8" height="8" rx="1.5" stroke={c} strokeWidth="1.75" fill="none"/>
      <rect x="16.5" y="4.5" width="3" height="3" rx="0.5" fill={c}/>
      {/* canto inferior esquerdo */}
      <rect x="2" y="14" width="8" height="8" rx="1.5" stroke={c} strokeWidth="1.75" fill="none"/>
      <rect x="4.5" y="16.5" width="3" height="3" rx="0.5" fill={c}/>
      {/* dados direita */}
      <rect x="14" y="14" width="3" height="3" rx="0.5" fill={c} opacity="0.4"/>
      <rect x="19" y="14" width="3" height="3" rx="0.5" fill={c}/>
      <rect x="14" y="19" width="3" height="3" rx="0.5" fill={c}/>
      <rect x="19" y="19" width="3" height="3" rx="0.5" fill={c} opacity="0.4"/>
    </svg>
  ),
  kanban: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="5.5" height="14" rx="1.5" fill={c} opacity="0.3"/>
      <rect x="9.25" y="3" width="5.5" height="9" rx="1.5" fill={c} opacity="0.6"/>
      <rect x="16.5" y="3" width="5.5" height="11" rx="1.5" fill={c}/>
      <rect x="2" y="19" width="5.5" height="2" rx="1" fill={c} opacity="0.15"/>
      <rect x="9.25" y="14" width="5.5" height="7" rx="1" fill={c} opacity="0.15"/>
      <rect x="16.5" y="16" width="5.5" height="5" rx="1" fill={c} opacity="0.15"/>
    </svg>
  ),
  conta: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke={c} strokeWidth="1.75" fill="none"/>
      <path d="M7 10h10M7 14h6" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="17" cy="14" r="2" fill={c} opacity="0.35"/>
      <path d="M15.5 14.5L16.2 15.2L18 13" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  analytics: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="13" width="4" height="8" rx="1.5" fill={c} opacity="0.35"/>
      <rect x="9.5" y="8" width="4" height="13" rx="1.5" fill={c} opacity="0.65"/>
      <rect x="16" y="3" width="4" height="18" rx="1.5" fill={c}/>
      <path d="M3 22h18" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  cardapio: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke={c} strokeWidth="1.75" fill="none"/>
      <path d="M8 7h8M8 11h8M8 15h5" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
      <rect x="14.5" y="13.5" width="4" height="4" rx="1" fill={c} opacity="0.3"/>
    </svg>
  ),
  notificacao: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3C8.686 3 6 5.686 6 9v5l-2 2v1h16v-1l-2-2V9c0-3.314-2.686-6-6-6Z" stroke={c} strokeWidth="1.75" fill={c} fillOpacity="0.12"/>
      <path d="M9.5 20a2.5 2.5 0 005 0" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="17" cy="5" r="3" fill={c}/>
    </svg>
  ),
  financeiro: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={c} strokeWidth="1.75" fill={c} fillOpacity="0.08"/>
      <path d="M12 7v1.5M12 15.5V17" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M9.5 10a2.5 2 0 012.5-2 2.5 2 0 012.5 2c0 1.1-.9 1.8-2.5 2-1.6.2-2.5 1-2.5 2.1a2.5 2 0 002.5 2 2.5 2 0 002.5-2" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  ),
  estoque: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9Z" stroke={c} strokeWidth="1.75" fill={c} fillOpacity="0.08"/>
      <rect x="9" y="13" width="6" height="8" rx="1" fill={c} opacity="0.35"/>
      <path d="M9 9h6" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
    </svg>
  ),
  pedidos: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="16" height="18" rx="2" stroke={c} strokeWidth="1.75" fill={c} fillOpacity="0.08"/>
      <path d="M8 8h8M8 12h8M8 16h5" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
      <circle cx="16.5" cy="16" r="1.5" fill={c} opacity="0.5"/>
    </svg>
  ),
  equipe: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="8" r="3" stroke={c} strokeWidth="1.75" fill={c} fillOpacity="0.12"/>
      <circle cx="17" cy="9" r="2.25" stroke={c} strokeWidth="1.5" fill={c} fillOpacity="0.08"/>
      <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke={c} strokeWidth="1.75" strokeLinecap="round"/>
      <path d="M17 14c1.657 0 3 1.343 3 3v1" stroke={c} strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
};

export default function FeatureIcon({ name, size = 48, color = "#4F8EF7" }: FeatureIconProps) {
  const renderIcon = ICONS[name];
  return (
    <div style={{
      width: size, height: size,
      borderRadius: Math.round(size * 0.28),
      background: `rgba(79,142,247,0.10)`,
      border: `1px solid rgba(79,142,247,0.18)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      {renderIcon ? renderIcon(color) : null}
    </div>
  );
}
