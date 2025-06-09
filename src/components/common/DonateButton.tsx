
const DonateButton = ({ className = "" }: { className?: string }) => {
  const donationUrl = import.meta.env.VITE_DONATION_URL;

  return (
    <a
      href={donationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-4 py-2 rounded-full border border-primary text-primary hover:bg-secondary transition-colors font-semibold ${className}`}
    >
      Donate
    </a>
  );
};

export default DonateButton;
