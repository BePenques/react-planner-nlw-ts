import { CheckCircle2, CircleDashed, UserCog } from 'lucide-react'
import { Button } from '../../../components/button'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/axios'
import { useParams } from 'react-router-dom'

interface Participant {
  id: string
  name: string | null
  email: string
  isConfirmed: boolean
}

export function GuestList() {
  const { tripId } = useParams()
  const [participants, setParticipants] = useState<Participant[]>([])

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants))
  }, [tripId])

  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants.map((participant, index) => {
          return (
            <div
              key={participant.id}
              className="flex items-center justify-between gap-4"
            >
              <div className="space-y-1.5">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Participante ${index}`}
                </span>
                <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200 cursor-pointer">
                  {participant.email}
                </a>
              </div>
              {participant.isConfirmed ? (
                <CheckCircle2 className="text-green-400 size-5 shrink-0" />
              ) : (
                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              )}
            </div>
          )
        })}
      </div>
      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  )
}
