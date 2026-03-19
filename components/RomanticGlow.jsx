export default function RomanticGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-96 h-96 bg-pink-300 opacity-30 blur-3xl rounded-full -top-20 -left-20 animate-pulse" />

      <div className="absolute w-80 h-80 bg-rose-300 opacity-30 blur-3xl rounded-full -bottom-20 -right-20 animate-pulse" />
    </div>
  );
}