import React from 'react'
import { TeamCard } from './Team'

const TechTeam = () => {
  return (
    <div className="container px-4 mb-16 mx-auto">
          <div className="flex flex-wrap -m-4">
            <TeamCard
              id="1"
              category="TECH HEAD"
              title="SHRUTI VERMA"
              image="/team/team18.jpg"
              ihref="https://www.instagram.com/shrutiverma2600/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
            <TeamCard
              id="2"
              category="MEMBER"
              title="RIYA SAHA"
              image="/team/team19.jpg"
              ihref="https://www.instagram.com/riyasaha._/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
            <TeamCard
              id="3"
              category="MEMBER"
              title="ROSHAN KUMAR"
              image="/team/team20.jpg"
              ihref="https://www.instagram.com/itzzz_roshan/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
            <TeamCard
              id="1"
              category="MEMBER"
              title="SIDDHARTH GOUR"
              image="/team/team21.jpg"
              ihref="https://www.instagram.com/siddharthgour_/"
              fhref="https://www.facebook.com"
              lhref="https://twitter.com"
            />
          </div>
        </div>
  )
}

export default TechTeam
