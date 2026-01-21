# Pull Request Checklist

Before submitting your PR, please ensure you've completed the following:

## ✅ Pre-Push Checklist

- [ ] **Run local CI/CD tests**: `./test-ci-local.sh` passes
- [ ] **Build succeeds**: `npm run build` completes without errors
- [ ] **Linting passes**: `npm run lint` shows no errors
- [ ] **Type checking passes**: `npm run type-check --workspace=frontend` succeeds
- [ ] **Tests pass**: `npm test` completes (even if no tests exist)
- [ ] **No security issues**: `npm audit --audit-level=high` shows no high-severity issues

## 📝 Description

<!-- Describe your changes here -->

## 🔄 Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] CI/CD improvement

## 🧪 Testing

<!-- Describe the tests you ran to verify your changes -->

- [ ] Tested locally with `./test-ci-local.sh`
- [ ] Manually tested the application
- [ ] Added/updated unit tests
- [ ] Added/updated integration tests

## 📸 Screenshots (if applicable)

<!-- Add screenshots to help explain your changes -->

## 📚 Additional Notes

<!-- Any additional information that reviewers should know -->
