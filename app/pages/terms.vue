<script lang="ts" setup>
definePageMeta({
  layout: 'minimal'
})

const layoutStore = useLayoutStore()
</script>

<template>
  <UContainer class="flex flex-col gap-12 py-12">
    <!-- Header -->
    <div class="space-y-2">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
        Terms & Conditions
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Last updated: {{ new Date().toLocaleDateString() }}
      </p>
    </div>

    <!-- Introduction -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        1. Agreement to Terms
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        By accessing and using {{ layoutStore.websiteTitle }} ("the Platform"), you accept and agree to be bound by and comply with these Terms & Conditions and our Privacy Policy. If you do not agree to abide by the above, please do not use this service.
      </p>
    </section>

    <!-- Use License -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        2. Use License
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Permission is granted to temporarily download one copy of the materials (information or software) on the Platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose or for any public display</li>
        <li>Attempt to decompile or reverse engineer any software contained on the Platform</li>
        <li>Remove any copyright or other proprietary notations from the materials</li>
        <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        <li>Violate any applicable laws or regulations</li>
      </ul>
    </section>

    <!-- User Accounts -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        3. User Accounts
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        If you create an account on the Platform, you are responsible for maintaining the confidentiality of your account information and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account. You must be at least 18 years old or have parental/guardian consent to use the Platform.
      </p>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
      </p>
    </section>

    <!-- Intellectual Property -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        4. Intellectual Property Rights
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        The Platform and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by {{ layoutStore.websiteTitle }}, its licensors, or other providers of such material and are protected by international copyright, trademark, and other intellectual property laws.
      </p>
    </section>

    <!-- User-Generated Content -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        5. User-Generated Content
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Any content you provide, upload, or transmit through the Platform remains your property. By uploading or transmitting content, you grant {{ layoutStore.websiteTitle }} a non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, publish, and distribute such content for the purposes of providing and improving the Platform.
      </p>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        You represent and warrant that any content you provide does not violate any third-party rights and is not illegal or inappropriate.
      </p>
    </section>

    <!-- Limitations of Liability -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        6. Limitations of Liability
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        In no event shall {{ layoutStore.websiteTitle }}, its officers, directors, employees, or agents be liable to you for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Platform or the materials contained thereon, even if we have been advised of the possibility of such damages.
      </p>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        The Platform is provided on an "as is" basis without any warranties of any kind, express or implied.
      </p>
    </section>

    <!-- User Conduct -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        7. User Conduct
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        You agree that you will not:
      </p>
      <ul class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
        <li>Harass, threaten, embarrass, or cause distress or discomfort to any individual</li>
        <li>Engage in any unlawful conduct or encourage others to do so</li>
        <li>Upload or transmit obscene, indecent, or offensive content</li>
        <li>Attempt to gain unauthorized access to any portion of the Platform</li>
        <li>Transmit any form of spam or malware</li>
        <li>Interfere with or disrupt the normal flow of the Platform</li>
      </ul>
    </section>

    <!-- Termination -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        8. Termination of Use
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        {{ layoutStore.websiteTitle }} may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, if you breach any of the terms and conditions of this agreement or engage in any activities prohibited under this agreement.
      </p>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Upon termination, your right to use the Platform will immediately cease.
      </p>
    </section>

    <!-- Privacy -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        9. Privacy
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        Your use of the Platform is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices. By using the Platform, you consent to our collection and use of personal information as outlined in the Privacy Policy.
      </p>
    </section>

    <!-- Third-Party Links -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        10. Third-Party Links
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        The Platform may contain links to third-party websites and services that are not operated by {{ layoutStore.websiteTitle }}. This Terms & Conditions applies only to the Platform. We are not responsible for the content, accuracy, or practices of any third-party websites or services linked to or from the Platform.
      </p>
    </section>

    <!-- Modifications to Terms -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        11. Modifications to Terms
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        {{ layoutStore.websiteTitle }} reserves the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to the Platform. Your continued use of the Platform following the posting of revised Terms & Conditions means that you accept and agree to the changes.
      </p>
    </section>

    <!-- Governing Law -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        12. Governing Law
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        These Terms & Conditions and your use of the Platform are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>
    </section>

    <!-- Contact Information -->
    <section class="space-y-4">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        13. Contact Information
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        If you have any questions about these Terms & Conditions, please contact us at:
      </p>
      <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-1 text-gray-700 dark:text-gray-300">
        <p><strong>{{ layoutStore.websiteTitle }}</strong></p>
        <p>Phone: +92 314 7864828</p>
        <p>Email: starcouseacademy@gmail.com</p>
      </div>
    </section>

    <FloatingButton />
  </UContainer>
</template>
