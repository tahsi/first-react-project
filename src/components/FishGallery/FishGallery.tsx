import styles from './FishGallery.module.css'

interface FishItemProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

const FishItemsData: FishItemProps[] = [
  { id: 1, name: 'Salmon', description: 'blub', image: 'src/images/fish-tools-1.jpg' },
  { id: 2, name: 'Salmon', description: 'bla', image: 'src/images/fish-tools-2.jpg' },
  { id: 3, name: 'Salmon', description: 'bli', image: 'src/images/fish-tools-3.jpg' },
  { id: 4, name: 'Salmon', description: 'blu', image: 'src/images/fish-tools-4.jpg' },
];

function FishGallery() {
  return (
    <div className={styles.fishItemsSection}>
      <h1 className={styles.fishItemsSectionTitle}>Fishing Tools</h1>
      <div className={styles.fishItemsContainer}>
        {FishItemsData.map(item => <FishItem key={item.id} {...item} />)}
      </div>
    </div>
  );

}

const FishItem = ({ name, description, image }: FishItemProps) => (
  <div className={styles.fishItem}>
    <div className={styles.fishItemImage}>
      <img src={image} alt={name} />
    </div>
    <div>{name}</div>
    <div>{description}</div>
  </div>
);

export default FishGallery;