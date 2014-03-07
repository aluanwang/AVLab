uniform  float time ;

uniform  vec4 pos0 ;
uniform  vec4 pos1 ;
uniform  vec4 pos2 ;
uniform  vec4 pos3 ;

float noise(vec2 pos) {
  return fract(sin(dot(pos.xy, vec2(12.0, 73.0))) * (1000.0+time));
}



void main()
{  
  vec2 p = gl_FragCoord.xy/vec2(500.0,500.0);
  float area=1.0;
  area=noise(floor(gl_FragCoord.xy/12.5)*12.5); 

  if(p.y<0.25 && p.x<0.25){
	//
  	area=noise(floor(gl_FragCoord.xy/12.5/pos0.xy)*12.5 +pos0.zw); 

  }
  else if(p.y<0.25 && p.x<0.5 && p.x>0.25 ){
	//
	area=noise(floor(gl_FragCoord.xy/12.5 /pos1.xy)*12.5 +pos1.zw); 
  
  }else if(p.y<0.25 && p.x<0.75 && p.x>0.5 ){
	//
	area=noise(floor(gl_FragCoord.xy/12.5/pos2.xy)*12.5 +pos2.zw); 
  
  }else if(p.y<0.25 && p.x<1.0 && p.x>0.75 ){
	//
	area=noise(floor(gl_FragCoord.xy/12.5/pos3.xy)*12.5 +pos3.zw); 
  
	}


  gl_FragColor = vec4(area,area,area,1.0);

}
