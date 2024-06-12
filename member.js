function skillsMember() {
  var member = JSON.parse(localStorage.getItem('member'));
  var skills = member.skills;
  var ul = document.getElementById('skillsList');
  for (var i = 0; i < skills.length; i++) {
    var li = document.createElement('li');
    li.textContent = skills[i];
    ul.appendChild(li);
  }
}