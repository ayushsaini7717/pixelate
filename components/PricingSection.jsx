import PricingCard from "./PricingCard";
import { memo } from "react";

const PricingSection = memo(() => {
  const plans = [
    {
      plan: 'Starter',
      price: 29,
      features: [
        '100 AI transformations/month',
        'Basic neural processing',
        'Standard support',
        'Web app access'
      ]
    },
    {
      plan: 'Pro',
      price: 79,
      features: [
        '500 AI transformations/month',
        'Advanced quantum upscaling',
        'Priority processing',
        'API access',
        'Batch processing',
        'Premium support'
      ],
      featured: true
    },
    {
      plan: 'Enterprise',
      price: 199,
      features: [
        'Unlimited transformations',
        'Custom AI model training',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Advanced analytics'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Unleash Your Power
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan to transform your creative workflow with AI-powered image editing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              featured={plan.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

export default PricingSection;