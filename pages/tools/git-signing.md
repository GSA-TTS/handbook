---
title: Git commit signing
keywords: git, signing, ssh
questions:
  - admins-github
  - dev
cSpell: ignore allstar
---

TTS strongly encourages all git commits to be cryptographically signed. A cryptographic signature is a strong indication that that the work was authored by the person claiming to have authored it and that it has not been changed since they authored it.

## Signing requirements

GitHub repositories throughout TTS are monitored by a configuration-management tool called [Allstar]({%link "https://github.com/GSA-TTS/.allstar" %}). If your team's repository is managed by Allstar, it will _require_ commit signing.

### Managing your keys

We strongly recommend [using a password manager]({% page "general-information-and-resources/tech-policies/password-requirements/#1-use-a-password-manager" %}) to manage your signing keys. [KeePassXC]({% link "https://keepassxc.org/" %}) is approved for use at GSA and it fully supports managing keys.

### Using GitHub on the web does not require signing

If you only use GitHub from the web interface, you do not need to configure signing. The web interface automatically signs your work for you.

If you do any work with git repos on your local computer, however, you need to set up commit signing.

## 1. Create your keys

Cryptographically signing your commits requires creating a pair of keys. One of them is your private key, and you must keep it secret. Think of it much like a password – only you should ever have access to it. Anyone with this private key can sign with your identity, so protect it!

The other key is your public key, and it may be shared widely. In fact, in order to verify your signed commits, others will need access to your public key.

1. Open a terminal window and enter the following command, substituting your own email address:
```sh
ssh-keygen  -t ed25519 -C "[YOUR EMAIL]@gsa.gov"
```

{% alert "About the cryptographic algorithm" %}
  We recommend using the ED25519 algorithm, a particular configuration of the EdDSA algorithm family. This is stronger than the default DSA family. This algorithm may not be appropriate for all cases, however, as it is newer and is not as widely supported yet. git and GitHub both support the ED25519 algorithm.
{% endalert %}

2. You will be asked where to save the key: `Enter file in which to save the key (/Users/[username]/.ssh/[key name])`
  - If you are using a password manager like KeePassXC, it will be more convenient if you change this path. Type `/Users/[username]/Desktop/git-signing-key`. (`[username]` is your login name on your laptop.)
  - If you are not using a password manager, type `~/.ssh/git-signing-key`.

3. Next, you will be asked to provide a password for your key file.
  - If you are using a password manager, simply press enter to have an empty password. You will need to press enter a second time to confirm. Since it will be stored in your password manager, the key is protected by the password manager itself and does not need its own password.
  - If you are not using a password manager, enter a strong password. You will have to confirm the password. This step protects your key in the event that a bad actor obtains it – they won't be able to use it without the password.

## 2. Set up your keys for use

### Using KeePassXC

#### 1. Set up KeePassXC to manage your SSH keys
1. In KeePassXC, open **Settings** (`⌘+,` on macOS, or the settings are located under Tools -> SSH Agent in KeePassXC for Windows).
2. Click the button on the left sidebar that says **SSH Agent**. Ensure the **Enable SSH Agent integration** checkbox is checked.

  {% image "_img/tools/git-signing/keepassxc-ssh-01.png" %}

3. Click the **OK** button at the bottom.

#### 2. Add your keys to KeePassXC

1. Add the keys to a KeePassXC entry.
  - If you already have an entry in KeePassXC for your GitHub account, double-click it to open it in editing mode.
  - Otherwise, create a new entry using the **+ (Add a new entry)** button in the top bar.
2. On the left side of the editing window, click the **Advanced** button to navigate to the Advanced screen.
3. Scroll down to the section titled **Attachments**.
4. Click the **Add** button on the right side, and use the file browser to find the key you created above. Look for the files called `git-signing-key` and `git-signing-key.pub`, and add them both.

  {% image "_img/tools/git-signing/keepassxc-git-signing-01.png" %}

Once you have added the files to KeePassXC, you can delete them from your desktop. You will only be using them from KeePassXC from here onwards.

#### 3. Tell KeePassXC that these are keys
1. Double-click to edit the entry that has the keys attached.
2. Click the button that says **SSH Agent** on the left sidebar.
3. Look for the section labeled **Private key** that includes a drop-down box labeled **Attachment**.
3. Click in the drop-down box and select the private key you added as an attachment. The sections below should then populate with information such as "Fingerprint," "Comment," and "Public key."
  - **IMPORTANT:** Use the _private_ key, the one that is just `git-signing-key`, not the public key!

  {% image "_img/tools/git-signing/keepassxc-git-signing-02.png" %}

4. Click the **OK** button at the bottom to save your entry.
5. Finally, right-click on your entry and click the option near the bottom of the pop-up menu that says **Add key to SSH Agent**.

### Set up your keys manually

#### macOS

1. Open a terminal window and enter the following command:

```sh
ssh-add --apple-use-keychain ~/.ssh/git-signing-key
```

2. You will be prompted to enter the password you created for your key.
  - Using the `--apple-use-keychain` option will store your password securely in the macOS keychain, where it will only be available when you are logged into your computer.

#### Linux

Open a terminal window and enter the following command:

```sh
ssh-add ~/.ssh/git-signing-key
```

You may be required to enter the password associated with your key every time you create a new git commit.

{% alert "Re-adding the keys after a restart", "warning" %}
  You may need to re-add your SSH keys after restarting your computer. In KeePassXC, right-click on your entry again and click the **Add key to SSH Agent**. You can also [add them manually](#set-up-your-keys-manually).
{% endalert %}

## 3. Configure git to sign commits

By default, git uses a format called GPG for commit signing. However, GPG keys are more difficult to create and manage, so we recommend SSH keys, which is what you created in the previous steps.

1. Tell git to use SSH keys instead of GPG keys. In a terminal, enter this command:

```sh
git config --global gpg.format ssh
```

2. Next, tell git to sign your commits. Enter this command to enable commit signing in all of your repos by default:

```sh
git config --global commit.gpgsign true
```

### 1. Tell git about your key

#### Copy your public key from KeePassXC
1. Double-click to edit the KeePassXC entry that contains your keys.
2. Click the button that says **SSH Agent** in the left sidebar.
3. Find the large text area labeled **Public key**.
4. Click on the **Copy to clipboard** button at the bottom to copy the public key.
  - You will have 10 seconds to paste the key. KeePassXC clears the clipboard after 10 seconds.

  {% image "_img/tools/git-signing/keepassxc-ssh-02.png" %}

5. Back in your terminal window, enter this command:

```sh
git config --global user.signingkey "key::[PASTE]"
```

The `key::` part is required! Paste your public key after the two colons. The `key::` portion tells git that you are specifying a key directly. Otherwise, it assumes you are specifying a file that contains your key.

#### Tell git manually (without using KeePassXC)
Enter this command into a terminal window:

```sh
git config --global user.signingkey ~/.ssh/git-signing-key
```

### 2. Tell git your key is allowed
Before git will accept your key to sign a commit, the key must be listed in an
"approved signers" list.

#### KeePassXC
1. [Copy your public
key]({% page "tools/git-signing#copy-your-public-key-from-keepassxc" %}) again.
2. Enter this command in your terminal, using your own email address:

```sh
echo "[YOUR EMAIL]@gsa.gov [PASTE PUBLIC KEY]" >> ~/.gitsigners
```

#### Manually

Enter this command in your terminal, using your own email address:

```sh
echo "[YOUR EMAIL]@gsa.gov $(cat ~/.ssh/git-signing-key.pub)" >> ~/.gitsigners
```

## 4. Tell GitHub about your key

Git may be configured to sign your commits, but GitHub will mark them as `Unverified` and they will not be accepted under the Allstar policy.

In order to verify your signed commits, you must associate the public key with your GitHub account.
1. Go to your [GitHub SSH and GPG keys settings page]({% link "https://github.com/settings/keys" %}).
2. Follow the [instructions provided by GitHub]({% link "https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account" %}) to add your signing key.

{% alert "Add a signing key, not an authentication key", "warning" %}
  When you add your key to GitHub, it presents a drop-down for key types. By default, it will add an authentication key. Be sure to click the drop-down and select the signing key option instead.
{% endalert %}
