package com.novaconcept.content 
{
	import com.greensock.TweenMax;
	import com.novaconcept.content.buttons.HorizontalMenuButton;
	import com.novaconcept.elements.HorizontalValueSlider;
	import flash.display.MovieClip;
	/**
	 * ...
	 * @author jesse
	 */
	public class page19SliderActivity 
	{
		private const MAX_VALUE:Number =1133;
		
		private var graph1:MovieClip; 
		private var graph2:MovieClip; 
		private var graph3:MovieClip; 
		
		private var slider1:HorizontalValueSlider;
		private var slider2:HorizontalValueSlider;
		private var slider3:HorizontalValueSlider;
		private var slider4:HorizontalValueSlider;
		
		private var auditoireBtn:HorizontalMenuButton;
		private var dispersionBtn:HorizontalMenuButton;
		private var roulementBtn:HorizontalMenuButton;
		private var tempsBtn:HorizontalMenuButton;
		
		private var horizontalMenu:MovieClip;
		
		public function page19SliderActivity(page) 
		{
			horizontalMenu = page["sliderMenu"];
			graph1 = page["bar_en_class"];
			graph2 = page["bar_class_virtuelle"];
			graph3 = page["bar_elearning"];
			
			slider1 = new HorizontalValueSlider(page.sliderMenu["sliderAuditoir"]);
			slider2 = new HorizontalValueSlider(page.sliderMenu["sliderDispersion"]);
			slider3 = new HorizontalValueSlider(page.sliderMenu["sliderRoulement"]);
			slider4 = new HorizontalValueSlider(page.sliderMenu["sliderTemps"]);
			
			auditoireBtn = new HorizontalMenuButton(page["btnAuditoir"],0);
			dispersionBtn = new HorizontalMenuButton(page["btnDispersion"],1);
			roulementBtn = new HorizontalMenuButton(page["btnRoulement"],2);
			tempsBtn = new HorizontalMenuButton(page["btnTemps"], 3);
			
			slider1.signal.add(updateGraphs);
			slider2.signal.add(updateGraphs);
			slider3.signal.add(updateGraphs);
			slider4.signal.add(updateGraphs);
			
			auditoireBtn.signal.add(onMove);
			dispersionBtn.signal.add(onMove);
			roulementBtn.signal.add(onMove);
			tempsBtn.signal.add(onMove);
			
			auditoireBtn.display.gotoAndStop(2);
			dispersionBtn.display.gotoAndStop(1);
			roulementBtn.display.gotoAndStop(1);
			tempsBtn.display.gotoAndStop(1);

		}
		
		private function onMove(index:int):void 
		{
			TweenMax.to(horizontalMenu, 1, { x: index * -2048 } );
			
			auditoireBtn.display.gotoAndStop(1);
			dispersionBtn.display.gotoAndStop(1);
			roulementBtn.display.gotoAndStop(1);
			tempsBtn.display.gotoAndStop(1);
			
			switch(index){
			case 0: auditoireBtn.display.gotoAndStop(2); break;
			case 1: dispersionBtn.display.gotoAndStop(2); break;
			case 2: roulementBtn.display.gotoAndStop(2); break;
			case 3: tempsBtn.display.gotoAndStop(2); break;
			}
		}
		
		private function updateGraphs():void 
		{
			/*
			graph1.width = (0.5 + (getAverageClasse() * .5)) * MAX_VALUE;
			graph2.width = (0.3 + (getAverage() * .45)) * MAX_VALUE;
			graph3.width = (0.1 + (getAverage() * 0.4)) * MAX_VALUE;
			
			*/
			
			graph1.width = getAverageClasse() * MAX_VALUE;
			graph2.width = getAverageVirtuelle() * MAX_VALUE;
			graph3.width = getAverageElearning() * MAX_VALUE;
			
		}
		
		private function getAverageClasse():Number 
		{
			var aud:Number = slider1.value;
			var disp:Number = slider2.value;
			var roulement:Number = slider3.value;
			var temps:Number = slider4.value;
			
			
			if (aud < .4)
				aud = .4;
			
			if (disp < .4)
				disp = .4;
				
			if (roulement < .4)
				roulement = .4;
				
			if (temps > .6)
				temps = .6;
				
			var value:Number =  (aud + disp + roulement + (1 - temps)) / 4;
			//var value:Number = (aud + slider2.value + slider3.value + (1 - slider4.value)) / 4;
			
			return value;
		}
		
		private function getAverageVirtuelle():Number
		{
			var aud:Number = slider1.value;
			var disp:Number = slider2.value;
			var roulement:Number = slider3.value;
			var temps:Number = slider4.value;
			
			
			if (aud < .25)
				aud = .25;
			
			if (disp < .25)
				disp = .25;
				
			if (roulement < .25)
				roulement = .25;
				
			if (temps > .75)
				temps = .75;
				
			var value:Number = ((aud * .7) + (disp * .5) + (roulement * .7 ) + (1 - ( temps * .7 ))) / 4;
			//var value:Number = (aud + slider2.value + slider3.value + (1 - slider4.value)) / 4;
			
			return value;
		}
		
		private function getAverageElearning():Number
		{
			var aud:Number = slider1.value;
			var disp:Number = slider2.value;
			var roulement:Number = slider3.value;
			var temps:Number = slider4.value;
			
			
			if (aud < .1)
				aud = .1;
			
			if (disp < .1)
				disp = .1;
				
			if (roulement < .1)
				roulement = .1;
				
			if (temps > .9)
				temps = .9;
				
			var value:Number = ((aud * .7) + (disp * .1) + (roulement * .5 ) + (1 - ( temps * .4 ))) / 4;
			//var value:Number = (aud + slider2.value + slider3.value + (1 - slider4.value)) / 4;
			
			return value;
		}
		
	}

}