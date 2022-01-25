import { Dialog } from '@headlessui/react'
import Button from '../ui/button'
import styles from '../../styles/DialogDescription.module.css'
import { Book } from '../icon'

export const DialogDescription = ({ isOpen, onIsOpen }) => {
  return (
    <Dialog open={isOpen} onClose={onIsOpen}>
      <Dialog.Overlay className={styles.backyard} />
      <div className={styles.dialog}>
        <Dialog.Title className={styles.title}>
          <Book /> Descripcion
        </Dialog.Title>

        <p className={styles.p}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam totam
          consectetur ratione commodi dolorem quis eos voluptas odit, culpa
          iste. Nostrum quasi illum, animi iste similique debitis. Labore
          sapiente praesentium voluptatum earum possimus fugiat culpa ipsam
          officia placeat quod dolorem incidunt assumenda dicta vel saepe fugit
          dolore qui error suscipit, numquam iste optio non voluptates.
          <br />
          <br />
          Nostrumodit, placeat aliquam adipisci laboriosam optio deserunt
          perferendis quaerat aliquid! Est ipsum alias temporibus iste beatae
          molestiae ab harum fugiat facilis, vel sequi fugit. Numquam vero
          dolorum quo a suscipit. Maiores facilis cumque assumenda possimus ab
          vero in ut et, tenetur obcaecati. Cumque, sint!
        </p>
        <Button style='cancel' onClick={onIsOpen}>
          Cancel
        </Button>
      </div>
    </Dialog>
  )
}
