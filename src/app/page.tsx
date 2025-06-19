'use client';

import {
  ModeToggle,
  Button,
  ThemeSwitcher,
  Text,
  Icon,
  ThemeIcon,
} from '@consensys/ds3';

import {
  Zap,
  Globe,
  BookOpen,
  Palette,
  Triangle,
  Waves,
  Puzzle,
  Settings,
  Github,
} from 'lucide-react-native';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-1 text-neutral-12 flex flex-col">
      {/* Header */}
      <header className="flex justify-center items-center p-6">
        <div className="flex justify-center sm:justify-end items-center w-full">
          <div className="flex items-center gap-4 px-3 py-2 bg-neutral-2 rounded-lg shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-10">Mode:</span>
              <ModeToggle />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-neutral-10">Theme:</span>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex items-center justify-center p-6 overflow-y-auto">
        <div className="max-w-4xl w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <Icon icon={ThemeIcon} color="secondary" size="lg" className="w-30 h-30 mb-6" />
            
            <Text size="4xl" weight="bold" className="mb-4">
              Next.js + DS3
            </Text>
            
            <Text size="xl" color="neutral" className="max-w-2xl mx-auto mb-3">
              The ultimate starter template for DS3 and Next.js.
            </Text>
            
            <hr className="border-t border-neutral-6 w-full max-w-lg mx-auto mb-8" />
            
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-neutral-11 text-base font-medium mb-8 max-w-2xl mx-auto">
              <li className="flex items-center gap-2">
                <Icon icon={Puzzle} size="md" color="primary" />
                Rich components
              </li>
              <li className="flex items-center gap-2">
                <Icon icon={Waves} size="md" color="secondary" />
                Tailwind styling
              </li>
              <li className="flex items-center gap-2">
                <Icon icon={Globe} size="md" color="success" />
                Accessible
              </li>
              <li className="flex items-center gap-2">
                <Icon icon={Palette} size="md" color="warning" />
                Advanced theming
              </li>
              <li className="flex items-center gap-2">
                <Icon icon={Zap} size="md" color="error" />
                Web3 ready
              </li>
              <li className="flex items-center gap-2">
                <Icon icon={Settings} size="md" color="neutral" />
                Fully Customizable
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="solid" 
                color="primary" 
                size="lg"
                onClick={() => window.open('https://github.com/Consensys-Network-State/ds3/tree/main/packages/ui#-component-library', '_blank')}
              >
                <Button.Icon icon={BookOpen} />
                <Button.Text>Component Library</Button.Text>
              </Button>
              
              <Button 
                variant="outline" 
                color="neutral" 
                size="lg"
                onClick={() => window.open('https://github.com/Consensys-Network-State/ds3', '_blank')}
              >
                <Button.Icon icon={Github} />
                <Button.Text>View on Github</Button.Text>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex flex-row sm:gap-8 gap-2">
            <Button
              variant="ghost"
              color="neutral"
              className="flex items-center gap-2 text-base"
              onClick={() => window.open('https://tailwindcss.com/docs', '_blank')}
            >
              <Button.Icon icon={Waves} />
              <Button.Text>Tailwind</Button.Text>
            </Button>
            <Button
              variant="ghost"
              color="neutral"
              className="flex items-center gap-2 text-base"
              onClick={() => window.open('https://nextjs.org/docs', '_blank')}
            >
              <Button.Icon icon={Triangle} />
              <Button.Text>Next.js</Button.Text>
            </Button>
            <Button
              variant="ghost"
              color="neutral"
              className="flex items-center gap-2 text-base"
              onClick={() => window.open('https://react.dev/reference/react', '_blank')}
            >
              <Button.Icon icon={Globe} />
              <Button.Text>React</Button.Text>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
