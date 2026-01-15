'use client';
import { cn } from '@/lib/utils';

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto max-w-7xl h-full flex flex-col items-center justify-center opacity-30',
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,theme(colors.primary.DEFAULT)_0%,transparent_50%)] opacity-20" />
    </div>
  );
};
