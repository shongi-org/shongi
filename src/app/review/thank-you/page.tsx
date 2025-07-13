'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Box, Flex, Card, Text } from '@radix-ui/themes';
import { Check } from 'lucide-react';
import Button from '@/components/Button';

const ThankYouPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const existingReview = searchParams.get('existing') === 'true';

  return (
    <Flex justify="center" align="center" className="min-h-screen p-4">
      <Card className="w-full max-w-md p-6">
        <Flex direction="column" gap="4" align="center">
          <Box className="rounded-full bg-green-100 p-4">
            <Check size={48} className="text-green-600" />
          </Box>

          <Text size="6" weight="bold" className="text-center">
            {existingReview
              ? 'You have already submitted a review'
              : 'Thank You For Your Review!'}
          </Text>

          <Text className="text-center text-gray-700">
            {existingReview
              ? 'You have already submitted a review for this appointment.'
              : 'Your feedback helps us improve our services and assists other users in making informed decisions.'}
          </Text>

          <Button
            type='button'
            className="bg-[#283b77] hover:bg-[#1e2d5f] text-white py-2 px-4 rounded-md mt-4"
            onClick={() => router.push('/')}
          >
            Back to Home
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

const ThankYouPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ThankYouPageContent />
  </Suspense>
);

export default ThankYouPage;
