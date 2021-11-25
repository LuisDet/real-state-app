import HeadArticle from '../../components/head-articule';
import ClientList from '../../components/client-list';

export default function Clients() {
  return (
    <section>
      <HeadArticle title='Clientes' link='/client/create' />
      <ClientList />
    </section>
  );
}
