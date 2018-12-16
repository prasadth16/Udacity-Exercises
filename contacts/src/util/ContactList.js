import React, { Component } from 'react'

class ContactList extends Component {
	render() {
		const contactsprops = this.props.contList
		return (
			<ul className='Contacts'>
				{contactsprops.map(c => <li key={c.id} className="listItem">

					<div className="avatar"
						style={{
							backgroundImage: `url(${c.avatarURL})`
						}}
					></div>
					<div className="contactDetails">
					<p>{c.name}</p>
					<p>{c.handle}</p>
					</div>
					<button className="contact-remove">remove</button>
				</li>)}
			</ul>
		)

	}
}
export default ContactList