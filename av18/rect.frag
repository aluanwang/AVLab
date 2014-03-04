void main(void){
	vec2 uv =gl_FragCoord.xy/vec2(500.0,500.0);
	float f=2.0;
	float a1=smoothstep(0.0,0.15,uv.x);
        float a2=smoothstep(1.0,0.85,uv.x);
	f=1.0-(f-a1-a2);
	gl_FragColor=vec4(1.0,1.0,1.0,f);
}
