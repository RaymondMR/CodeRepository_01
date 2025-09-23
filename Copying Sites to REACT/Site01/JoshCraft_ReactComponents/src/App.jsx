
import Header from './components/Header';
import Hero from './components/Hero';
import Card, { CardBody, CardHeader } from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <Hero />
      <main className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center my-8">Meet Josh</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold">About Josh</h3>
            </CardHeader>
            <CardBody>
              <p>Learn more about Josh&apos;s background and his vision for Boston.</p>
              <Button className="mt-4">Learn More</Button>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold">The Issues</h3>
            </CardHeader>
            <CardBody>
              <p>Explore Josh&apos;s stance on the key issues facing our city.</p>
              <Button className="mt-4">See the Issues</Button>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold">Get Involved</h3>
            </CardHeader>
            <CardBody>
              <p>Join the movement and help build a better Boston for everyone.</p>
              <Button className="mt-4">Join Us</Button>
            </CardBody>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;