import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Que buena app posta!';
  skills = [{
  	name: 'HTML5',
  	skill: 100
  },{
  	name: 'CSS3',
  	skill: 100
  },{
  	name: 'Javascript',
  	skill: 90
  },{
  	name: 'jQuery',
  	skill: 75
  },{
  	name: 'SASS',
  	skill: 80
  },{
  	name: 'Bootstrap 3',
  	skill: 90
  },{
  	name: 'Gulp.js',
  	skill: 80
  },{
  	name: 'Angular 2',
  	skill: 65
  },{
  	name: 'Git',
  	skill: 90
  },{
  	name: 'Ionic 2',
  	skill: 80
  },{
  	name: 'Photoshop',
  	skill: 85
  },{
  	name: 'GIMP',
  	skill: 60
  },{
  	name: 'iBeacon',
  	skill: 100
  },{
  	name: 'Eddystone',
  	skill: 70
  },{
  	name: 'UI/UX',
  	skill: 90
  },{
  	name: 'SEO',
  	skill: 100
  },{
  	name: 'Responsive Web Design',
  	skill: 90
  },{
  	name: 'Google Analytics',
  	skill: 80
  }];

  education = [{
  	name: 'Acamica',
  	url: 'https://www.acamica.com/',
  	img: 'acamica-logo.png',
  	carreer: 'Programación',
  	date: 'Febrero del 2015 - actualidad',
  	courses: [{
  		name: 'Dominando Sass',
  		certificate: 'https://www.acamica.com/cert/10a9d0a1555384cc591a6b0dd29b3833af25c795'
  	},{
  		name: 'Animaciones en CSS',
  		certificate: 'https://www.acamica.com/cert/46e6c589a3928aca6d1874758ec82e74000e2f33'
  	},{
  		name: 'Diseño de aplicaciones',
  		certificate: 'https://www.acamica.com/cert/f46390737d3223f476e1aebcf867a0cb9d21dccc'
  	},{
  		name: 'Git',
  		certificate: 'https://www.acamica.com/cert/11860922de07fb585ab3f2d5d1fa5be4915e8788'
  	},{
  		name: 'Responsive Design',
  		certificate: 'https://www.acamica.com/cert/b350b47c14bedb06246d4e2a3f6eb50a8f261ec4'
  	},{
  		name: 'jQuery',
  		certificate: 'https://www.acamica.com/cert/c19f7eb1c36c525b10fe11061eb735ed8239c7cf'
  	},{
  		name: 'HTML5',
  		certificate: 'https://www.acamica.com/cert/60d901d59e0ec16033c93fa813c23a866ed60a21'
  	},{
  		name: 'CSS Avanzado',
  		certificate: 'https://www.acamica.com/cert/0ff3fa051327810ee2c85443677703345cfd8904'
  	},{
  		name: 'Fundamentos del Diseño',
  		certificate: 'https://www.acamica.com/cert/dbc260011edf6aef83b775a567bd1ecd2306bc8d'
  	}, {
  		name: 'Gulp.js, automatizando tareas',
  		certificate: 'https://www.acamica.com/cert/ab84ed63709cd6794273fb9e902a644adf411d84'
  	}],
  	text: 'Con 23 cursos realizados, solo incluí aquellos que me parecieran realmente relevantes para la ocasión.'
  },{
  	name: 'Code School',
  	url: 'https://www.codeschool.com/',
  	img: 'codeschool-logo.png',
  	carreer: 'Programación',
  	date: 'Abril del 2015 - actualidad',
  	courses: [{
  		name: 'JavaScript Road Trip (Part 1, 2 & 3)',
  		certificate: 'https://www.codeschool.com/users/1373188/badges/321'
  	},{
  		name: 'JavaScript Best Practices',
  		certificate: 'https://www.codeschool.com/users/1373188/badges/435'
  	},{
  		name: 'ES2015: The Shape of JavaScript to Come',
  		certificate: 'https://www.codeschool.com/users/1373188/badges/575'
  	},{
  		name: 'Blasting Off with Bootstrap',
  		certificate: 'https://www.codeschool.com/users/1373188/badges/481'
  	},{
  		name: 'Accelerating Through Angular 2',
  		certificate: 'https://www.codeschool.com/users/1373188/badges/645'
  	},{
  		name: 'Breaking the Ice with Regular Expressions',
  		certificate: 'https://www.codeschool.com/users/1373188/badges/524'
  	}],
  	text: 'Con 12 cursos realizados, solo incluí aquellos que me parecieran realmente relevantes para la ocasión.'
  },{
  	name: 'Universidad Católica de Santiago del Estero (UCSE)',
  	url: 'http://newsite.ucse.edu.ar/index.php/',
  	img: 'ucse-logo.png',
  	carreer: 'Abogacía',
  	date: 'Febrero del 2010 - Febrero del 2015',
  	courses: [{
  		name: 'Derecho Empresario'
  	},{
  		name: 'Derecho Comercial III'
  	},{
  		name: 'Practica II (Consultorio Jurídico)'
  	},{
  		name: 'Derecho Penal II'
  	},{
  		name: 'Derecho Civil III'
  	},{
  		name: 'Teoría General del Proceso'
  	},{
  		name: 'Derecho Constitucional'
  	},{
  		name: 'Historia del Pensamiento Político y Jurídico (Ayudante de Cátedra)'
  	}],
  	text: 'Con 28 materias aprobadas y 5 regularizadas tendría mucho que hablar al respecto, así que me limito a hablar de solo las materias que me parecen más destacables y haya aprobado. También fui ayudante de cátedra por un año en la materia de "Historia del Pensamiento Político y Jurídico".'
  }];
}
