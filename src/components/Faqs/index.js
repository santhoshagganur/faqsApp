// Write your code here.
import {Component} from 'react'
import './index.css'

class Faqs extends Component {
  const {faqsList}= this.props

  render() {
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="faqs-card">
            <h1 className="heading"> FAQs </h1>
            <ul className= 'list-container'>
                {faqsList.map(each=> <FaqItem eachItem= {each} key= {each.id}/>)}
            </ul>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
