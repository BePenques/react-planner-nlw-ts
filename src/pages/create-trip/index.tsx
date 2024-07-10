import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './components/invite-guests-modal'
import { InviteConfirmTripModal } from './components/confirm-trip-modal'
import { DestinationAndDateStep } from './components/steps/destination-and-date-step'
import { InviteGuestsStep } from './components/steps/invite-guests-step'

export function CreateTrip() {
  const navigate = useNavigate()
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function toggleGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])
    event.currentTarget.reset()
  }

  function removeEmailsFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (invited) => invited !== emailToRemove,
    )
    setEmailsToInvite(newEmailList)
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }
  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true)
  }

  function createTrip() {
    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10 gap-3">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            toggleGuestsInput={toggleGuestsInput}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              openGuestsModal={openGuestsModal}
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br />
          com nossos <a className="text-zinc-300 underline">
            termos de uso
          </a> e{' '}
          <a className="text-zinc-300 underline">políticas de privacidade.</a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailsFromInvites={removeEmailsFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <InviteConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  )
}
