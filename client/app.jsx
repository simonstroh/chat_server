class Chat extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      videoHasStarted: false
    }
    this.requestVideoCall = this.requestVideoCall.bind(this)
  }
  returnSubmit(e) {
    if (e.charCode === 13) {
      e.preventDefault()
      $('form').submit()
    }
  }
  renderEnlargeButton() {
    var button = document.createElement('button')
    button.id = 'enlarge'
    var img = document.createElement('img')
    img.src = 'enlarge.svg'
    img.width = '25'
    img.height = '25'
    button.appendChild(img)
    button.onclick = function() {

    }
    document.body.appendChild(button)
  }
  renderEndButton() {
    var button = document.createElement('button')
    button.id = 'end-call'
    var img = document.createElement('img')
    img.src = 'end_call.svg'
    img.width = '190'
    img.height = '38'
    button.appendChild(img)
    button.onclick = function() {

    }
    document.body.appendChild(button)
  }
  requestVideoCall(e) {
    if (window.offerer) {
      if (!document.getElementById(window.offerer)) peer.sendParticipationRequest(window.offerer)
    }
    document.getElementById('pop-up').style.opacity = '0.4'
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    var text = $('#m').val()
    text = text + '⍄' + peer.userid
    $('#m').val(text)
    $('form').submit()
  }
  render() {
    return(
      <form action="" style={this.props.styles}>
        <textarea id="m" onKeyPress={this.returnSubmit}/>
        <div className="btns">
          <button type="submit"><img src="chat.svg" width="22px" height="22px" /></button>
          <button onClick={this.requestVideoCall}><img src="video.svg" width="22px" height="22px" /></button>
        </div>
      </form>
    )
  }
}

class ChatInfo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div id="window" style={this.props.styles}>
        <p>Please enter the name of the person you would like to speak to:</p>
        <input id="input1" type="text" />
        <p>And your name:</p>
        <input id="input2" type="text" />
        <input type="submit" onClick={this.props.formSubmit}/>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatStyles: {
        display: 'none'
      },
      formStyles: {
        display: 'block'
      },
      user1: '',
      user2: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }
  handleFormSubmit(e) {
    e.preventDefault()
    var text1 = document.getElementById('input1').value
    var text2 = document.getElementById('input2').value
    this.setState({user1: text2})
    this.setState({user2: text1})
    this.setState({formStyles: {display: 'none'}})
    this.setState({chatStyles: {display: 'flex'}})
    var el = document.createElement('p')
    el.style.color = 'transparent'
    el.style.height = '0'
    el.id = 'users'
    el.innerHTML = text2 + ' > ' + text1
    var el1 = document.createElement('h2')
    var el2 = document.createElement('h2')
    el1.innerHTML = text2.slice(0, 1)
    el2.innerHTML = text1.slice(0, 1)
    var avatars = document.createElement('div')
    avatars.className = 'avatars'
    avatars.appendChild(el1)
    avatars.appendChild(el2)
    document.getElementById('pop-up').appendChild(el)
    document.getElementById('pop-up').appendChild(avatars)
  }
  render() {
    return(
      <div id="pop-up">
        <span>Chat</span>
        <h5>ask something or mention anything to your point of contact</h5>
        <ChatInfo styles={this.state.formStyles} formSubmit={this.handleFormSubmit} />
        <ul id="messages">
        </ul>
        <Chat users={[this.state.user1, this.state.user2]}styles={this.state.chatStyles} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
