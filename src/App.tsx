import './styles/globals.css'
import styles from './styles/styles.module.css';

function App() {
  
  return (
    <div className={styles.container}>
      <div>
        <p>Click in the button to generate, a fact about cats!</p>
        <button>Generate Fact</button>
      </div>
    </div>
  )
}

export default App
