import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
const Widgets = () => {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />

            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />

            </div>
            {newsArticle("Covid-19 Highest Values","top news!")}

            {newsArticle("Linkedin Clone is Done","top news!")}
            {newsArticle("Stripe payment one of the highest used payment method","Top News!")}
            {newsArticle("Redux keep on getting better","Insiders")}

            {newsArticle("Snapshat Clone is Coming Soon","Long waited News!")}
        </div>
    )
}

export default Widgets
