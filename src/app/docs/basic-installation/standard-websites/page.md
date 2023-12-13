---
title: Standard Websites
nextjs:
  metadata:
    title: Publisher Analytics Installation
    description: Step-by-step guide to install and configure the Publisher Analytics plugin.
---

For standard websites, the installation process involves adding a script to your website's HTML code. This script initializes the Publisher Analytics plugin and sets up the A/B testing component.

---

## Prerequisites

Ensure that you have the necessary permissions to install plugins on your website. You should also have a basic understanding of HTML and JavaScript.

### Installation

To install the Publisher Analytics plugin, you need to add the following script to your website's home page and each article you want to monitor:

```html
<html>
<head>
</head>
<body>

<div>
<!-- Your Website Content Here -->
</div>

<!-- Publisher Analytics -->
<script src="https://publisheranalytics.ai/publisher-sdk"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var accountCode = "99999";
        var userId = "99999"
        var sdk = new PublisherAnalyticsSDK(accountCode, userId);
        sdk.setupExperiments();
    });
</script>
<!-- /Publisher Analytics -->

</body>
</html>
```

This script initializes the Publisher Analytics plugin with your account details and sets up the A/B testing component.

{% callout title="Important Details!" %}
1. To ensure proper execution, it is recommended to place the script within the body tag, after all the page content, as shown in the example above.
2. Don't forget to replace `accountCode = "99999"` and `userId = "99999"` with your actual access credentials.
3. Add this script not only to the home page but also to all article pages you wish to monitor.
{% /callout %}

All right! You've completed the basic installation. Now if you want to use the A/B Testing feature, the next step is to install the tags to identify the elements of the articles. See how to do this at [A/B Testing Installation](../../../docs/ab-testing-installation/standard-websites/).

---

### Support

If you need further assistance, please contact our support team. We're here to help you get the most out of the Publisher Analytics plugin.
