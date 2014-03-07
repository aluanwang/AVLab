uniform  float time ;

float rand(vec2 p)
{
	p+=.2127+p.x+.3713*p.y;
	vec2 r=4.789*sin(789.123*(p));
	return fract(r.x*r.y);
}

void main()
{  
	vec2 c = (gl_FragCoord.xy/vec2(500.0,500.0));
	vec4 f = vec4( rand( floor( vec2( 10.0*time ) * c.xy ) ) );
	gl_FragColor = f;

}