import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  TrendingUp, 
  TrendingDown,
  Zap, 
  Target, 
  Bot, 
  MessageSquare, 
  ArrowRight,
  ShieldAlert,
  Crosshair,
  Lock,
  PhoneMissed,
  CalendarCheck,
  FileText,
  Star,
  ShieldCheck,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const Index = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fire ViewContent only on the main page
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent');
    }
  }, []);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [api]);

  const galleryImages = Array.from(new Set([
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc10c7afddf1492978f.jpg",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc76f9cd8f350b8f8c8.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc16f9cd8f350b8f867.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc16f9cd8f350b8f863.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc12fa97cb7545238b0.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc76f9cd8f350b8f8cd.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc40c7afddf149297d1.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc121adde19f4d1b139.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc42fa97cb75452391e.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc415c172b5cfecb5d1.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc719fc27f6cf5c2323.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc621adde19f4d1b1a4.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc519fc27f6cf5c2301.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc406fe2e51dce0f4f3.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a430fc206fe2e51dce0f4c5.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f489d0f48753969c40e2.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f4896f5641e105208739.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f489a0a2a170070ac270.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f489989afcfcc93d2bf0.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f489d0f48753969c40f3.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f489f9249c3d8be02202.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48af130cb119fa1bfd3.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48aa0a2a170070ac282.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48a6f5641e10520874f.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48af9249c3d8be02212.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48aa0a2a170070ac288.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48a1bf938e547f5dd0f.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48a989afcfcc93d34b0.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48af130cb119fa1c3ad.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48af130cb119fa1c41f.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48bf130cb119fa1c629.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48ae098dfac37f8e4bb.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48a9114462c710b6c1e.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48b989afcfcc93d3932.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48b1bf938e547f5dd1e.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48ba0a2a170070ac29e.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48b6f5641e105208785.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48b9114462c710b6c3a.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48bf130cb119fa1c98f.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48cf9249c3d8be0228a.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f48ca0a2a170070ac2cc.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f568e098dfac37fab5c8.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f568989afcfcc93ea337.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f568a0a2a170070bd85c.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f5689114462c710c21ac.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f568f130cb119fa27324.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f569989afcfcc93ea34d.png",
    "https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f5681bf938e547f68c01.png"
  ]));

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground pb-20">
      {/* Top Announcement Banner */}
      <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center text-sm font-bold flex items-center justify-center gap-2 z-50 relative">
        <Clock className="h-4 w-4" />
        <span>Limited Time Offer: Complete Andromeda Playbook for just $27 today.</span>
      </div>

      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a3ee4375aefbd076ba618be.png" 
              alt="CV Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl tracking-tight">AdPlaybook</span>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e">
              Get Access Now
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm bg-primary/10">
                The 2026 Edition — The 3-Prompt System for Andromeda
              </Badge>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
                Crack the Code to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">High-Converting</span> Meta Ads.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Stop burning money on ads that don't deliver. Discover the fast, efficient, and proven playbook that feeds Meta the exact winning signals it craves.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 md:p-5 text-left flex items-start sm:items-center gap-4 shadow-lg shadow-primary/5 max-w-2xl mx-auto lg:mx-0">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-bold">Includes 3 Master AI Prompts:</span> Designed for ChatGPT, Claude, or any Generative AI/LLM to instantly automate your <strong className="text-foreground">Market Research, Ad Creation, and Copywriting</strong> for winning Andromeda-ready campaigns.
                </p>
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg" className="h-16 px-10 text-xl font-bold rounded-full shadow-[0_0_40px_rgba(255,165,0,0.3)] hover:shadow-[0_0_60px_rgba(255,165,0,0.5)] transition-all duration-300">
                  <a href="https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e">
                    Download the Playbook <ArrowRight className="ml-2 h-6 w-6" />
                  </a>
                </Button>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-6 text-sm text-muted-foreground font-medium">
                  <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Secure Checkout</span>
                  <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 30-Day Guarantee</span>
                  <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Instant Access</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative mx-auto w-full max-w-2xl lg:max-w-none mt-8 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-2xl blur-xl opacity-20"></div>
              <img 
                src="https://vibe.filesafe.space/1782774903994617696/assets/56206ce1-232e-4ce3-af45-4cadc3e13cf3.png" 
                alt="The Andromeda Ad Creation Playbook" 
                className="relative rounded-2xl border border-primary/20 shadow-2xl w-full object-cover lg:rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The "Proof" Section */}
      <section className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Crosshair className="h-16 w-16 text-primary mx-auto opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold">How did you get to this page?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You clicked an ad. An ad that was built using the <strong className="text-foreground">exact framework</strong> inside this playbook. 
              We targeted you using the precise signals Meta's algorithm is looking for right now. 
              <br/><br/>
              <span className="text-primary font-semibold">If it worked on you, it will work on your customers.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Andromeda Problem */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-destructive font-bold bg-destructive/10 px-3 py-1 rounded-full">
                <ShieldAlert className="h-5 w-5" /> The Problem
              </div>
              <h2 className="text-4xl font-bold leading-tight">Meta's Andromeda Retrieval System is breaking old ad strategies.</h2>
              <p className="text-lg text-muted-foreground">
                If your CPA is skyrocketing and your reach is tanking, it's because Meta's new AI-driven Andromeda system doesn't understand your ads. It relies on deep, complex signals to match your offer with buyers.
              </p>
              <ul className="space-y-4">
                {[
                  "Old targeting hacks are dead.",
                  "Broad audiences require precise creative signals.",
                  "The algorithm penalizes low-efficiency setups."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-destructive" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="p-8 border-primary/30 bg-primary/5 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Target className="h-32 w-32" />
              </div>
              <div className="relative z-10 space-y-6 flex-grow">
                <div className="inline-flex items-center gap-2 text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
                  <CheckCircle2 className="h-5 w-5" /> The Solution
                </div>
                <h3 className="text-2xl font-bold">The Signal-First Playbook</h3>
                <p className="text-muted-foreground">
                  This playbook gives you the exact templates and structures to feed Andromeda what it wants: High-efficiency, low-cost signals that force the algorithm to prioritize your ads.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-primary" /> Prompt 1: Voice-of-Customer Research</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-primary" /> Prompt 2: Creative Concept & Image Generation</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="h-4 w-4 text-primary" /> Prompt 3: Meta Ad Copy System</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm bg-primary/10">
              The Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to transform your ad creation process from a guessing game into a predictable system.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0"></div>
            {[
              {
                step: "01",
                title: "Copy The Prompt",
                desc: "Select the specific prompt you need from the playbook—whether it's for research, visual concepts, or ad copy.",
                icon: <FileText className="h-6 w-6 text-primary" />
              },
              {
                step: "02",
                title: "Feed It To AI",
                desc: "Paste the prompt into ChatGPT, Claude, or your preferred LLM, filling in your specific business details in the provided brackets.",
                icon: <Bot className="h-6 w-6 text-primary" />
              },
              {
                step: "03",
                title: "Launch Winning Ads",
                desc: "Take the verified, Andromeda-ready outputs and deploy them directly into your Meta Ads Manager.",
                icon: <Zap className="h-6 w-6 text-primary" />
              }
            ].map((item, i) => (
              <Card key={i} className="relative z-10 p-8 border-border bg-card hover:border-primary/50 transition-colors text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-background border-2 border-primary/50 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,165,0,0.1)]">
                  {item.icon}
                </div>
                <Badge variant="secondary" className="mb-4">{item.step}</Badge>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After Section */}
      <section className="py-24 bg-secondary/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">The Choice Is Yours</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You can keep fighting the algorithm, or you can feed it exactly what it wants.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-destructive/30 bg-destructive/5 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold text-destructive">The Old Way</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-destructive mt-1 font-bold">✗</span><span className="text-muted-foreground">Hours of guessing what copy will work.</span></li>
                <li className="flex items-start gap-3"><span className="text-destructive mt-1 font-bold">✗</span><span className="text-muted-foreground">Skyrocketing CPAs and burning budget.</span></li>
                <li className="flex items-start gap-3"><span className="text-destructive mt-1 font-bold">✗</span><span className="text-muted-foreground">Constantly penalized by Meta's algorithm.</span></li>
                <li className="flex items-start gap-3"><span className="text-destructive mt-1 font-bold">✗</span><span className="text-muted-foreground">Losing market share to faster competitors.</span></li>
              </ul>
            </Card>
            <Card className="p-8 border-green-500/30 bg-green-500/5 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-green-500">The Playbook Way</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1 font-bold">✓</span><span className="text-muted-foreground">Minutes of AI-driven certainty.</span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1 font-bold">✓</span><span className="text-muted-foreground">Low, stable CPAs that allow you to scale.</span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1 font-bold">✓</span><span className="text-muted-foreground">Feeding Meta the winning signals it craves.</span></li>
                <li className="flex items-start gap-3"><span className="text-green-500 mt-1 font-bold">✓</span><span className="text-muted-foreground">Dominating your niche with high-converting ads.</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Built With The Playbook Gallery */}
      <section className="py-24 bg-background border-t border-border overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm bg-primary/10">
              Proven Results
            </Badge>
        <h2 className="text-4xl md:text-5xl font-bold">Built With The Playbook</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A few examples of high-converting creatives generated using our signal-first frameworks. 
        </p>
          </div>

          <div className="px-4 md:px-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {galleryImages.map((src, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="overflow-hidden border-border bg-card/50 h-full flex flex-col">
                        <div className="aspect-square relative flex items-center justify-center bg-muted/10 p-2">
                          <img src={src} alt={`Ad Example ${index + 1}`} className="object-contain w-full h-full rounded-md shadow-sm" />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="hidden md:flex -right-4 md:-right-12 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Sneak Peek Section */}
      <section id="sneak-peek" className="py-24 bg-secondary/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm bg-primary/10">
              Sneak Peek
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">A Glimpse Inside The Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just tell you what to do; we give you the exact copy-and-paste structures. Here is a small taste of the frameworks included.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 relative max-w-[280px] sm:max-w-sm md:max-w-md mx-auto lg:max-w-none lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-xl"></div>
              <img src="https://vibe.filesafe.space/1782774903994617696/attachments/2fce4980-8b14-4ada-92b6-8e87e7f92beb.png" alt="PDF Sneak Peek" className="relative rounded-2xl border border-border shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 w-full" />
            </div>
            
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              <Card className="p-6 bg-card border-border font-mono text-sm text-muted-foreground hover:border-primary/50 transition-colors">
                <p className="text-primary mb-2 font-bold">// Source Verification Checklist</p>
                <ul className="space-y-2 mt-2">
                  <li>👉 Open every source link.</li>
                  <li>👉 Confirm the quotation is exact.</li>
                  <li>👉 Record the platform and date.</li>
                </ul>
              </Card>
              <Card className="p-6 bg-card border-border font-mono text-sm text-muted-foreground hover:border-primary/50 transition-colors">
                <p className="text-primary mb-2 font-bold">// Image QA Checklist</p>
                <ul className="space-y-2 mt-2">
                  <li>👉 Main message understandable in 2s.</li>
                  <li>👉 Visual signals persona/problem.</li>
                  <li>👉 No invented reviews/ratings.</li>
                </ul>
              </Card>
              <Card className="p-6 bg-card border-border font-mono text-sm text-muted-foreground hover:border-primary/50 transition-colors">
                <p className="text-primary mb-2 font-bold">// Copy Review Worksheet</p>
                <ul className="space-y-2 mt-2">
                  <li>👉 Opening sentence identifies persona.</li>
                  <li>👉 5 primary texts are materially different.</li>
                  <li>👉 Customer language from verified research.</li>
                </ul>
              </Card>
              <Card className="p-6 bg-card border-border font-mono text-sm text-muted-foreground hover:border-primary/50 transition-colors">
                <p className="text-primary mb-2 font-bold">// Deployment Checklist</p>
                <p>Every concept has a clear persona, pain point, desired result, or objection.</p>
                <p className="mt-3 font-bold text-foreground">All claims are verified accurate.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Highlights */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Straight From The Pages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A few golden nuggets pulled directly from the playbook.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border bg-card relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors"></div>
              <Badge variant="outline" className="mb-4 bg-background text-primary border-primary/30">Page 3</Badge>
              <h3 className="text-xl font-bold mb-4">The One Rule That Prevents Failures</h3>
              <p className="text-muted-foreground italic border-l-2 border-primary/50 pl-4">
                "Keep all three prompts in the same Generative AI/LLM conversation whenever possible. Prompt 2 depends on the verified research from Prompt 1. Prompt 3 depends on the approved concepts and final creatives from Prompt 2."
              </p>
            </Card>
            <Card className="p-8 border-border bg-card relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors"></div>
              <Badge variant="outline" className="mb-4 bg-background text-primary border-primary/30">Page 10</Badge>
              <h3 className="text-xl font-bold mb-4">Truth and Authenticity Rule</h3>
              <p className="text-muted-foreground italic border-l-2 border-primary/50 pl-4">
                "Never invent a founder, expert, customer, review, rating, credential, statistic, result, award, or testimonial. If authentic proof has not been supplied, use a different concept."
              </p>
            </Card>
            <Card className="p-8 border-border bg-card relative overflow-hidden group hover:border-primary/50 transition-all">
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -z-10 group-hover:bg-primary/20 transition-colors"></div>
              <Badge variant="outline" className="mb-4 bg-background text-primary border-primary/30">Page 18</Badge>
              <h3 className="text-xl font-bold mb-4">The Job of the Copy</h3>
              <p className="text-muted-foreground italic border-l-2 border-primary/50 pl-4">
                "The visual earns attention and communicates a fast audience signal. The copy deepens relevance and explains the value. Every option should remain compatible with the specific creative it supports."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">What's Inside The Playbook?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to launch high-converting campaigns today. No fluff, just actionable frameworks.
            </p>
          </div>

          <div className="mb-12 max-w-4xl mx-auto relative rounded-2xl overflow-hidden border border-border shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
            <img 
              src="https://vibe.filesafe.space/1782774903994617696/assets/7253a885-d684-4311-9ed9-f698a0777d6f.png" 
              alt="Playbook Prompts" 
              className="w-full h-[300px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Prompt 1: Voice-of-Customer Research",
                desc: "Find real language, recurring problems, desired outcomes, and objections before any ad concept is built. Includes the Fallback Protocol for when AI browsing fails.",
                icon: <Target className="h-8 w-8 text-primary" />
              },
              {
                title: "Prompt 2: Creative Concept & Image Generation",
                desc: "Develop budget-appropriate, visually distinct Meta ad concepts using proven direct-response principles. Replaces the old 'always 10' rule.",
                icon: <Zap className="h-8 w-8 text-primary" />
              },
              {
                title: "Prompt 3: Meta Ad Copy System",
                desc: "Write diversified copy that supports each approved visual. Front-load the strongest persona, problem, benefit, or outcome in the first sentence.",
                icon: <FileText className="h-8 w-8 text-primary" />
              }
            ].map((feature, i) => (
              <Card key={i} className="p-8 border-border bg-card hover:border-primary/50 transition-colors">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Real Proof Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Here's What You're Getting</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This is a brand-new playbook. Instead of asking you to trust reviews from strangers, here's real proof: the actual system, explained plainly.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border bg-card relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold">Real Mechanism, Not Guesswork</h3>
                <p className="text-lg text-muted-foreground">Every rule in this playbook ties back to how Meta's Andromeda system actually retrieves and matches ads — explained in plain English, not just asserted.</p>
              </div>
            </Card>
            <Card className="p-8 border-border bg-card relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold">Zero Fabrication, By Design</h3>
                <p className="text-lg text-muted-foreground">Every prompt includes a built-in rule: never invent a testimonial, review, or result. This page holds itself to the same standard.</p>
              </div>
            </Card>
            <Card className="p-8 border-border bg-card relative flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <div className="relative z-10 space-y-4 mb-6">
                <h3 className="text-2xl font-bold">See It Before You Buy</h3>
                <p className="text-lg text-muted-foreground">Download the free preview and read the real mechanism breakdown and worked example before you spend a dollar.</p>
              </div>
              <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground relative z-10">
                <a href="#sneak-peek">Read Free Preview</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-2xl blur opacity-20"></div>
              <Card className="p-8 relative bg-background border-border">
                <div className="flex items-center gap-5 mb-6">
                  <img src="https://assets.cdn.filesafe.space/MFQB1Wfynb8uXgZL0AzQ/media/6a47f9b6f130cb119fa719b4.png" alt="Jeremy Wood" className="h-24 w-24 rounded-full object-cover object-[center_15%] border-2 border-primary/20" />
                  <div>
                    <h3 className="text-2xl font-bold">Jeremy Wood</h3>
                    <p className="text-primary font-medium">Creative Director</p>
                  </div>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>Built by Jeremy Wood, a creative director with 20+ years of hands-on experience building ad campaigns for real businesses — not a theorist, not an AI reseller.</p>
                  <p>When Meta's Andromeda system changed how ads get matched to buyers, this playbook is the actual process used to adapt.</p>
                </div>
              </Card>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <Badge variant="outline" className="border-primary text-primary px-4 py-1 text-sm bg-primary/10">
                Behind The Playbook
              </Badge>
              <h2 className="text-4xl font-bold leading-tight">Why should you trust us?</h2>
              <p className="text-lg text-muted-foreground">Because we're in the trenches every single day. We don't sell theory; we sell what is currently working right now on the platform.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 font-medium"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> 20+ years of hands-on creative direction — not repackaged theory.</li>
                <li className="flex items-start gap-2 font-medium"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> A documented system built specifically for how Meta's Andromeda actually works today.</li>
                <li className="flex items-start gap-2 font-medium"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> Every prompt tested end-to-end before publishing — not just written and shipped.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For & Not For */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Who This IS For</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /><span className="text-muted-foreground">E-commerce founders ready to scale their daily ad spend profitably.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /><span className="text-muted-foreground">Agency owners who need a repeatable framework to deliver client ROAS.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /><span className="text-muted-foreground">Course creators and coaches selling high-ticket offers.</span></li>
              </ul>
            </Card>
            <Card className="p-8 border-border bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <ShieldAlert className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-bold">Who This is NOT For</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3"><ShieldAlert className="h-5 w-5 text-destructive shrink-0 mt-0.5" /><span className="text-muted-foreground">People looking for a "get rich quick" magic button without doing the work.</span></li>
                <li className="flex items-start gap-3"><ShieldAlert className="h-5 w-5 text-destructive shrink-0 mt-0.5" /><span className="text-muted-foreground">Businesses unwilling to test new creative angles and formats.</span></li>
                <li className="flex items-start gap-3"><ShieldAlert className="h-5 w-5 text-destructive shrink-0 mt-0.5" /><span className="text-muted-foreground">Marketers who stubbornly cling to outdated targeting hacks.</span></li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost of Inaction Section */}
      <section className="py-24 bg-destructive/5 border-t border-destructive/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-destructive/10 via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">The True Cost of Doing Nothing</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Every day you continue running outdated ads, you aren't just missing out on sales—you are actively <strong className="text-foreground">burning your budget</strong>. 
          </p>
          <div className="bg-background/80 backdrop-blur border border-border p-8 rounded-2xl text-left max-w-2xl mx-auto shadow-xl">
            <p className="text-lg text-muted-foreground mb-4">While you wait to adapt:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><TrendingDown className="h-6 w-6 text-destructive shrink-0" /><span className="font-medium text-muted-foreground">Your CPAs will continue to rise as Meta penalizes low-efficiency signals.</span></li>
              <li className="flex items-start gap-3"><TrendingDown className="h-6 w-6 text-destructive shrink-0" /><span className="font-medium text-muted-foreground">Your competitors using AI frameworks will outbid you and steal your market share.</span></li>
              <li className="flex items-start gap-3"><TrendingDown className="h-6 w-6 text-destructive shrink-0" /><span className="font-medium text-muted-foreground">You will waste hours manually writing copy that the algorithm ignores.</span></li>
            </ul>
          </div>
          <p className="text-2xl font-bold text-foreground">For $27, you can stop the bleeding today.</p>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Here's Everything You're Getting Today</h2>
          </div>
          <Card className="p-8 border-primary/30 bg-background shadow-2xl">
            <div className="text-center mb-6 pb-6 border-b border-border/50">
              <h3 className="text-2xl font-bold text-foreground">The Andromeda Ad Creation Playbook</h3>
            </div>
            <div className="space-y-6 mb-8">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2"><Zap className="h-4 w-4" /> Free Fast-Action Bonuses</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-lg font-medium">Prompt 1: Voice-of-Customer Research</span>
                    <span className="text-lg text-muted-foreground line-through">$97 Value</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-lg font-medium">Prompt 2: Creative Concept & Image Generation</span>
                    <span className="text-lg text-muted-foreground line-through">$97 Value</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-lg font-medium">Prompt 3: Meta Ad Copy System</span>
                    <span className="text-lg text-muted-foreground line-through">$97 Value</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                    <span className="text-lg font-medium">Bonus Prompt 3B: Campaign Implementation Guidance</span>
                    <span className="text-lg text-muted-foreground line-through">$97 Value</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-6 text-center space-y-2 mb-8">
              <p className="text-xl text-muted-foreground">Total Real-World Value: <span className="line-through">$388</span></p>
              <p className="text-4xl font-extrabold text-foreground">Today's Price: <span className="text-primary">$27</span></p>
            </div>
            <Button asChild size="lg" className="w-full h-16 text-2xl font-bold rounded-xl shadow-[0_0_40px_rgba(255,165,0,0.4)] hover:shadow-[0_0_60px_rgba(255,165,0,0.6)] transition-all duration-300 animate-pulse">
              <a href="https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e">
                Get Instant Access Now
              </a>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-primary" /> Secure Checkout</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Instant Access</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> 30-Day Guarantee</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Guarantee & CTA Section */}
      <section className="py-24 bg-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
          <ShieldAlert className="h-20 w-20 text-primary mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold">The "Signal-First" Guarantee</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're confident in the system, not in guessing your results. Go through the playbook, run the prompts as written — if it doesn't give you a clearer, more usable ad-creation process than what you had before, email us within 30 days for a full refund.
          </p>
          <div className="pt-8">
            <Button asChild size="lg" className="h-16 px-12 text-2xl font-bold rounded-full shadow-[0_0_40px_rgba(255,165,0,0.4)] hover:shadow-[0_0_60px_rgba(255,165,0,0.6)] transition-all duration-300 animate-pulse mb-6">
              <a href="https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e">
                Get The Playbook Now
              </a>
            </Button>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground font-medium">
              <span className="flex items-center gap-1.5"><Lock className="h-4 w-4 text-primary" /> Secure Checkout</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Instant Access</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "What AI tools do I need to run this?",
                a: "The playbook is optimized for large-context LLMs with live web browsing and image generation. We recommend a single tool like ChatGPT Plus, Claude Pro, or Google AI Pro to run all three prompts in one seamless thread."
              },
              {
                q: "Do I need to be a Meta Ads expert to use this?",
                a: "Not at all. The playbook is designed to be plug-and-play. We provide the exact templates and structures; you just fill in the blanks with your business details."
              },
              {
                q: "Does this work for B2B or just E-commerce?",
                a: "It works for both. The Andromeda system relies on signals. Whether you're selling high-ticket B2B services or physical products, the framework teaches you how to feed the algorithm the exact signals it needs to find your buyers."
              },
              {
                q: "How soon can I start using it?",
                a: "Right away — the playbook is instant digital delivery, so you can open it and start running Prompt 1 within minutes of purchase. How quickly you move through all three prompts depends on your offer and how much research you already have, but there's no waiting period, no onboarding call, and nothing else to set up first."
              }
            ].map((faq, i) => (
              <Card key={i} className="p-6 border-border bg-card">
                <h3 className="text-xl font-bold mb-2 flex items-start gap-3">
                  <span className="text-primary">Q.</span> {faq.q}
                </h3>
                <p className="text-muted-foreground ml-7">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upsell / AI Tools Section */}
      <section className="py-24 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Scale Even Faster with <span className="text-primary">Cinematic Visions AI</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Getting the leads is step one. Closing them is step two. Our AI tools ensure you never miss opportunities to make money and never lose a customer again.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Demo UI */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-2xl blur opacity-20"></div>
              <Card className="relative bg-background border-border overflow-hidden shadow-2xl">
                <div className="border-b border-border bg-secondary/50 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Bot className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">CV AI Assistant</p>
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Active & Monitoring
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  {/* Inbound Message Event */}
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 w-[85%]">
                      <p className="text-sm">Hey! I saw your ad and wanted to get more info on pricing. Are you available for a quick chat?</p>
                    </div>
                  </div>

                  {/* AI Intervention */}
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-4 w-full border border-border">
                      <p className="text-sm">Hi there! I'm the AI assistant for the business. I can definitely help with pricing. Would you like to schedule a quick 15-min discovery call to go over the options?</p>
                    </div>
                  </div>

                  {/* Customer Reply */}
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 w-[85%]">
                      <p className="text-sm">Yes, tomorrow morning works for me.</p>
                    </div>
                  </div>

                  {/* AI Resolution */}
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-2xl rounded-tl-none p-4 w-full border border-border space-y-3">
                      <p className="text-sm">Perfect! I've gone ahead and booked a 15-min discovery call for you tomorrow at 10 AM.</p>
                      <div className="bg-background/50 border border-border p-3 rounded-lg flex items-center gap-3">
                        <CalendarCheck className="h-8 w-8 text-green-500" />
                        <div>
                          <p className="text-sm font-bold">Meeting Confirmed</p>
                          <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Omnichannel AI ChatBots</h3>
                    <p className="text-muted-foreground">Deploy intelligent ChatBots across your Social Media, Website, and SMS to instantly engage prospects and answer questions 24/7.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Voice AI Assistants</h3>
                    <p className="text-muted-foreground">Never miss a beat. Our Voice AI handles inbound and outbound calls, booking appointments and qualifying leads when you can't get to the phone.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border space-y-5">
                <p className="text-lg font-medium leading-relaxed">
                  Click the link below for an awesome, interactive demonstration to see exactly how these bots will work for <span className="text-primary font-bold">your company</span> in just seconds!
                </p>
                <a 
                  href="https://cinematicvisions.co/home" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 w-full sm:w-auto text-lg shadow-[0_0_20px_rgba(255,165,0,0.2)]"
                >
                  See Your Live Demo <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct-Response P.S. Section */}
      <section className="py-16 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-background border border-primary/20 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <h3 className="text-2xl font-bold mb-4">P.S. — Still on the fence?</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                If you're skipping straight to the bottom, here's the short version: 
                Meta's new Andromeda system requires specific signals to work. Old targeting hacks are dead.
              </p>
              <p>
                For <strong className="text-foreground">$27</strong>, you get the exact 3-prompt AI playbook we use to generate high-converting, Andromeda-ready ads in minutes using tools like ChatGPT and Claude. 
              </p>
              <p>
                You're protected by a <strong className="text-foreground">30-Day Guarantee</strong>. If it doesn't give you a clearer, more usable ad-creation process, you get your money back.
              </p>
              <p className="pt-2">
                <a href="https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e" className="text-primary font-bold hover:underline">
                  Click here to get instant access to the playbook right now.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background text-center text-muted-foreground relative z-10">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Cinematic Visions. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Bottom CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t border-border z-50 transform transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="container mx-auto max-w-4xl flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-bold text-foreground">The Andromeda Ad Creation Playbook</p>
            <p className="text-sm text-muted-foreground">Instant digital access + AI Prompts</p>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto font-bold rounded-full shadow-[0_0_20px_rgba(255,165,0,0.3)]">
            <a href="https://link.fastpaydirect.com/payment-link/6a4313c32cbd86186455328e">
              Get The Playbook Now - $27
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
