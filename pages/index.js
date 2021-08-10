import Card from '../components/Card';

export const getServerSideProps = async() => {
	const res = await fetch('https://ui-lab-test-task.herokuapp.com/api/cardInfo'); 
	const data = await res.json();
	
	return {
		props: { cardInfo: data }
	}
}

export default function Home(props) {
  return (
    <>
      <Card cardInfo={props.cardInfo.data} />
    </>
  )
}
