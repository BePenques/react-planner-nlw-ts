import { MapPin, Calendar, ArrowRight, Settings2 } from 'lucide-react'
import { Button } from '../../../../components/button'

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean
  toggleGuestsInput: () => void
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  toggleGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde voce vai?"
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          disabled={isGuestsInputOpen}
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
        />
      </div>
      <div className="w-px h-6 bg-zinc-800"></div>
      {isGuestsInputOpen ? (
        <Button onClick={toggleGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={toggleGuestsInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
